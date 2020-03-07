import SearchEngine from "./SearchEngine";
declare class Google implements SearchEngine {
    ping(sitemapUrl: string): Promise<boolean>;
}
export default Google;
