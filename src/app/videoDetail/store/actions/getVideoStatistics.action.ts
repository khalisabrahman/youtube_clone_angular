import { createAction, props } from "@ngrx/store";
import { ActionType } from '../actionTypes';

export const getVideoStatisticsAction = createAction(
    ActionType.GET_VIDEOSTATISTICS,
    props<{ videoId: string }>()
);

export const getVideoStatisticsSuccessAction = createAction(
    ActionType.GET_VIDEOSTATISTICS_SUCCESS,
    props<{ res: any }>()
);

export const getVideoStatisticsFailureAction = createAction(
    ActionType.GET_VIDEOSTATISTICS_FAILURE
);

