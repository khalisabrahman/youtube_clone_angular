import { createAction, props } from "@ngrx/store";
import { ActionType } from "../actionTypes";

export const getFeedAction = createAction(
    ActionType.GET_FEED,
    props<{selectedCategory: string}>()
)

export const getFeedActionSuccess = createAction(
    ActionType.GET_FEED_SUCCESS,
    props<{res: any}>()
)

export const getFeedActionFailure = createAction(
    ActionType.GET_FEED_FAILURE
)