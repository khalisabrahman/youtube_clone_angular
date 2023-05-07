import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AppStateInterface } from 'src/app/shared/types/appState.interface';
import { SearchFeedStateInterface } from '../types/searchFeedState.interface';

// export const searchFeedFeatureSelector = (
//   state: AppStateInterface
// ): SearchFeedStateInterface => state.searchFeed;

export const searchFeedFeatureSelector = createFeatureSelector<
  AppStateInterface,
  SearchFeedStateInterface
>("searchFeed");


export const isLoadingSelector = createSelector(
  searchFeedFeatureSelector,
  (searchFeedState: SearchFeedStateInterface) => searchFeedState.isLoading
);

export const searchResultSelector = createSelector(
  searchFeedFeatureSelector,
  (searchFeedState: SearchFeedStateInterface) => searchFeedState.data
);


