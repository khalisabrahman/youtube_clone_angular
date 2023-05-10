import { createAction, props } from "@ngrx/store";
import { ActionType } from '../actionTypes';

export const getRelatedSearchFeedAction = createAction(
    ActionType.GET_RELATEDSEARCHFEED,
    props<{ videoId: string }>()
);

export const getRelatedSearchFeedSuccessAction = createAction(
    ActionType.GET_RELATEDSEARCHFEED_SUCCESS,
    props<{ res: any }>()
);

export const getRelatedSearchFeedFailureAction = createAction(
    ActionType.GET_RELATEDSEARCHFEED_FAILURE
);

