import { Action, createReducer, on } from '@ngrx/store';

import { ChannelDetailsStateInterface } from 'src/app/channelDetail/types/channelDetailsState.interface';
import { getChannelDetailsAction, getChannelDetailsSuccessAction, getChannelVideosAction, getChannelVideosSuccessAction } from './getChannelDetails.action';

const initialState: ChannelDetailsStateInterface = {
  data: null,
  isLoading: false,
  error: null,
  videos: null
};

export const getChannelDetailsReducer = createReducer(
  initialState,
  on(
    getChannelDetailsAction,
    (state): ChannelDetailsStateInterface => ({
      ...state,
      isLoading: true,
    })
  ),
  on(
    getChannelDetailsSuccessAction,
    (state, action): ChannelDetailsStateInterface => ({
      ...state,
      isLoading: false,
      data: action.res.items[0]
    })
  ),
  on(
    getChannelVideosAction,
    (state): ChannelDetailsStateInterface => ({
      ...state,
      isLoading: true,
    })
  ),
  on(
    getChannelVideosSuccessAction,
    (state, action): ChannelDetailsStateInterface => ({
      ...state,
      isLoading: false,
      videos: action.res.items
    })
  ),
);

export function reducer(state: ChannelDetailsStateInterface, action: Action) {
  return getChannelDetailsReducer(state, action);
}
