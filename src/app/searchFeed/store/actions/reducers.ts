import { Action, createReducer, on } from '@ngrx/store';

import { getSearchFeedAction, getSearchFeedActionSuccess, getSearchFeedActionFailure } from './getSearchFeed.action';
import { SearchFeedStateInterface } from '../../types/searchFeedState.interface';

const initialState: SearchFeedStateInterface = {
  data: null,
  isLoading: false,
  error: null,
};

export const getSearchResultsReducer = createReducer(
  initialState,
  on(
    getSearchFeedAction,
    (state): SearchFeedStateInterface => ({
      ...state,
      isLoading: true,
    })
  ),
  on(
    getSearchFeedActionSuccess,
    (state, action): SearchFeedStateInterface => ({
      ...state,
      isLoading: false,
      data: action.res.items
    })
  )
);

export function reducer(state: SearchFeedStateInterface, action: Action) {
  return getSearchResultsReducer(state, action);
}
