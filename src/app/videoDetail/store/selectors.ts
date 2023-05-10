import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AppStateInterface } from 'src/app/shared/types/appState.interface';
import { SearchRelatedFeedStateInterface } from './types/searchRelatedFeedState.interface';

// export const searchFeedFeatureSelector = (
//   state: AppStateInterface
// ): SearchFeedStateInterface => state.searchFeed;

export const searchRelatedFeedFeatureSelector = createFeatureSelector<
  AppStateInterface,
  SearchRelatedFeedStateInterface
>("getRelatedFeeds");


export const isLoadingSelector = createSelector(
  searchRelatedFeedFeatureSelector,
  (searchFeedState: SearchRelatedFeedStateInterface) => searchFeedState.isLoading
);

export const searchRelatedResultSelector = createSelector(
  searchRelatedFeedFeatureSelector,
  (searchFeedState: SearchRelatedFeedStateInterface) => searchFeedState.data
);

export const videoStatisticsSelector = createSelector(
  searchRelatedFeedFeatureSelector,
  (searchFeedState: SearchRelatedFeedStateInterface) => searchFeedState.statistics
);


