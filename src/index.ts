import Google from "./SearchEngine/Google";

const core = require('@actions/core');
const validUrl = require('valid-url');
const sitemapUrl = <string>core.getInput('sitemap-url');

if (!validUrl.isUri(sitemapUrl)) {
    console.error('Sitemap URL is not valid');
    process.exit(1);
}

Promise.all([
    (new Google()).ping(sitemapUrl),
]).then(() => {
    console.info('Sitemap submitted successfully')
});
