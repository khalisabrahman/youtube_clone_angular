import { createAction, props } from "@ngrx/store";
import { ActionType } from '../actionTypes';

export const getChannelDetailsAction = createAction(
    ActionType.GET_CHANNELDETAIL,
    props<{ channelId: string }>()
);

export const getChannelDetailsSuccessAction = createAction(
    ActionType.GET_CHANNELDETAIL_SUCCESS,
    props<{ res: any }>()
);

export const getChannelDetailsFailureAction = createAction(
    ActionType.GET_CHANNELDETAIL_FAILURE
);

export const getChannelVideosAction = createAction(
    ActionType.GET_CHANNELVIDEOS,
    props<{ channelId: string }>()
);

export const getChannelVideosSuccessAction = createAction(
    ActionType.GET_CHANNELVIDEOS_SUCCESS,
    props<{ res: any }>()
);

export const getChannelVideosFailureAction = createAction(
    ActionType.GET_CHANNELVIDEOS_FAILURE
);

