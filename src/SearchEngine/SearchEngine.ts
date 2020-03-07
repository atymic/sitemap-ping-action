interface SearchEngine {
    ping(sitemapUrl: string): Promise<boolean>
}

export default SearchEngine
