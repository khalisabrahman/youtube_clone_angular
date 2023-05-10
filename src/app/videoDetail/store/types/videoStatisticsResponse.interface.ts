export interface VideoResponseInterface {
  items: any[];
  kind: string;
  pageInfo: {
    totalResults: number;
    resultsPerPage: number;
  };
}
