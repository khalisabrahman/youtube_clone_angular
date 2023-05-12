import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AppStateInterface } from 'src/app/shared/types/appState.interface';
import { ChannelDetailsStateInterface } from '../types/channelDetailsState.interface';

// export const searchFeedFeatureSelector = (
//   state: AppStateInterface
// ): SearchFeedStateInterface => state.searchFeed;

export const channelDetailsFeatureSelector = createFeatureSelector<
  AppStateInterface,
  ChannelDetailsStateInterface
>("channelDetails");


export const isLoadingSelector = createSelector(
    channelDetailsFeatureSelector,
  (searchFeedState: ChannelDetailsStateInterface) => searchFeedState.isLoading
);

export const channelDetailsSelector = createSelector(
    channelDetailsFeatureSelector,
  (searchFeedState: ChannelDetailsStateInterface) => searchFeedState.data
);

export const channelVideosSelector = createSelector(
    channelDetailsFeatureSelector,
  (searchFeedState: ChannelDetailsStateInterface) => searchFeedState.videos
);




