import { Action, createReducer, on } from '@ngrx/store';

import {
  getFeedAction,
  getFeedActionSuccess,
  getFeedActionFailure,
} from './getFeed.action';
import { FeedStateInterface } from '../types/feedState.interface';

const initialState: FeedStateInterface = {
  selectedCategory: '',
  data: null,
  isLoading: false,
  error: null,
};

export const getFeedResultsReducer = createReducer(
  initialState,
  on(
    getFeedAction,
    (state): FeedStateInterface => ({
      ...state,
      isLoading: true,
    })
  ),
  on(
    getFeedActionSuccess,
    (state, action): FeedStateInterface => ({
      ...state,
      isLoading: false,
      data: action.res.items,
    })
  )
);

export function reducer(state: FeedStateInterface, action: Action) {
  return getFeedResultsReducer(state, action);
}
