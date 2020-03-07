import SearchEngine from "./SearchEngine";
import got from  'got';


class Google implements SearchEngine{
    async ping(sitemapUrl: string): Promise<boolean> {
        const res = await got.get(`http://www.google.com/ping?sitemap=${sitemapUrl}`);

        return res.statusCode === 200;
    }
}

export default Google;
