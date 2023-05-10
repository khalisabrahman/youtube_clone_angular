import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { GetRelatedFeedService } from 'src/app/shared/services/getRelatedFeed.service';
import {
  getRelatedSearchFeedAction,
  getRelatedSearchFeedSuccessAction,
} from '../actions/getRelatedSearchFeed.action';
import { switchMap, map, tap } from 'rxjs';
import { getVideoStatisticsAction, getVideoStatisticsSuccessAction } from '../actions/getVideoStatistics.action';
import { GetVideoStatisticService } from 'src/app/shared/services/getVideoStatistics.service';

@Injectable()
export class GetRelatedSearchResultsEffect {
  getRelatedSearchResults$ = createEffect(() =>
    this.action$.pipe(
      ofType(getRelatedSearchFeedAction),
      switchMap(({ videoId }) => {
        return this.getRelatedFeedService.getRelatedFeedResults(videoId).pipe(
          map((response) => {
            return getRelatedSearchFeedSuccessAction({ res: response });
          })
        );
      })
    )
  );

  getVideoStatisticsResults$ = createEffect(() =>
    this.action$.pipe(
      ofType(getVideoStatisticsAction),
      switchMap(({ videoId }) => {
        return this.videoStatisticsService.getVideoStatistics(videoId).pipe(
          map((response) => {
            return getVideoStatisticsSuccessAction({ res: response });
          })
        );
      })
    )
  );

  constructor(
    private action$: Actions,
    private getRelatedFeedService: GetRelatedFeedService,
    private videoStatisticsService: GetVideoStatisticService
  ) {}
}
