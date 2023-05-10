import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AppStateInterface } from 'src/app/shared/types/appState.interface';
import { FeedStateInterface } from './types/feedState.interface';

// export const searchFeedFeatureSelector = (
//   state: AppStateInterface
// ): SearchFeedStateInterface => state.searchFeed;

export const searchFeedFeatureSelector = createFeatureSelector<
  AppStateInterface,
  FeedStateInterface
>("feed");


export const isLoadingSelector = createSelector(
  searchFeedFeatureSelector,
  (searchFeedState: FeedStateInterface) => searchFeedState.isLoading
);

export const searchResultSelector = createSelector(
  searchFeedFeatureSelector,
  (searchFeedState: FeedStateInterface) => searchFeedState.data
);

export const selectedCategorySelector = createSelector(
  searchFeedFeatureSelector,
  (searchFeedState: FeedStateInterface) => searchFeedState.selectedCategory
);

