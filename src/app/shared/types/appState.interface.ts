import { FeedStateInterface } from 'src/app/feed/store/types/feedState.interface';
import { SearchFeedStateInterface } from 'src/app/searchFeed/types/searchFeedState.interface';
import { SearchRelatedFeedStateInterface } from 'src/app/videoDetail/store/types/searchRelatedFeedState.interface';

export interface AppStateInterface {
  feed: FeedStateInterface;
  searchFeed: SearchFeedStateInterface;
  getRelatedFeeds: SearchRelatedFeedStateInterface
}
