import { VideoStatisticsInterface } from "./videoStatistics.interface";

export interface SearchRelatedFeedStateInterface {
  data: any[] | null;
  isLoading: boolean;
  error: string | null;
  statistics: VideoStatisticsInterface | null
}
