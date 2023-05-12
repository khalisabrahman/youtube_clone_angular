export interface ChannelResponseInterface {
    items: any[];
    kind: string;
    pageInfo: {
        totalResults: number,
        resultsPerPage: number
    }
}