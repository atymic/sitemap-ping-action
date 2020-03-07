import SearchEngine from "./SearchEngine";
declare class Bing implements SearchEngine {
    ping(sitemapUrl: string): Promise<boolean>;
}
export default Bing;
