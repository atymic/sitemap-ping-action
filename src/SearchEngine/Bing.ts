import SearchEngine from "./SearchEngine";
import got from  'got';

class Bing implements SearchEngine{
    async ping(sitemapUrl: string): Promise<boolean> {
        const res = await got.get(`http://www.bing.com/ping?sitemap=${sitemapUrl}`);

        return res.statusCode === 200;
    }
}

export default Bing;
