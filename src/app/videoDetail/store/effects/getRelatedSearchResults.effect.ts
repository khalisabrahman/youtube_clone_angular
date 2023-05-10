import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { GetRelatedFeedService } from 'src/app/shared/services/getRelatedFeed.service';
import {
  getRelatedSearchFeedAction,
  getRelatedSearchFeedSuccessAction,
} from '../actions/getRelatedSearchFeed.action';
import { switchMap, map, tap } from 'rxjs';

@Injectable()
export class GetRelatedSearchResultsEffect {
  getRelatedSearchResults$ = createEffect(() =>
    this.action$.pipe(
      ofType(getRelatedSearchFeedAction),
      switchMap(({ videoId }) => {
        return this.getRelatedFeedService.getRelatedFeedResults(videoId).pipe(
          tap((res) => console.log(res)),
          map((response) => {
            return getRelatedSearchFeedSuccessAction({ res: response });
          })
        );
      })
    )
  );

  constructor(
    private action$: Actions,
    private getRelatedFeedService: GetRelatedFeedService
  ) {}
}
