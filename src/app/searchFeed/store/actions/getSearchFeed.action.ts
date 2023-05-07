import { createAction, props } from "@ngrx/store";
import { ActionType } from "../actionTypes";

export const getSearchFeedAction = createAction(
    ActionType.GET_SEARCHFEED,
    props<{searchTerm: string}>()
)

export const getSearchFeedActionSuccess = createAction(
    ActionType.GET_SEARCHFEED_SUCCESS,
    props<{res: any}>()
)

export const getSearchFeedActionFailure = createAction(
    ActionType.GET_SEARCHFEED_FAILURE
)