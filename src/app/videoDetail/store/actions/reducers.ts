import { Action, createReducer, on } from '@ngrx/store';

import { getRelatedSearchFeedAction, getRelatedSearchFeedSuccessAction, getRelatedSearchFeedFailureAction } from './getRelatedSearchFeed.action';
import { SearchRelatedFeedStateInterface } from '../types/searchRelatedFeedState.interface';
import { getVideoStatisticsAction, getVideoStatisticsSuccessAction } from './getVideoStatistics.action';

const initialState: SearchRelatedFeedStateInterface = {
  data: null,
  isLoading: false,
  error: null,
  statistics: null
};

export const getRelatedResultsReducer = createReducer(
  initialState,
  on(
    getRelatedSearchFeedAction,
    (state): SearchRelatedFeedStateInterface => ({
      ...state,
      isLoading: true,
    })
  ),
  on(
    getRelatedSearchFeedSuccessAction,
    (state, action): SearchRelatedFeedStateInterface => ({
      ...state,
      isLoading: false,
      data: action.res.items
    })
  ),
  on(
    getVideoStatisticsSuccessAction,
    (state, action): SearchRelatedFeedStateInterface => ({
      ...state,
      statistics: action.res.items[0]
    })
  ),
);

export function reducer(state: SearchRelatedFeedStateInterface, action: Action) {
  return getRelatedResultsReducer(state, action);
}
