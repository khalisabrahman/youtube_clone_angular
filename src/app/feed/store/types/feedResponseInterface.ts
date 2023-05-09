export interface FeedResponseInterface {
    items: any[];
    kind: string;
    nextPageToken: string;
    pageInfo:{
        totalResults: number,
        resultsPerPage: number
    };
    regionCode: string;
}