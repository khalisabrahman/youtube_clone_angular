import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap, tap } from 'rxjs/operators';
import { TopBarService } from '../../../shared/services/topBar.service';
import {
  getSearchFeedAction,
  getSearchFeedActionSuccess,
} from '../actions/getSearchFeed.action';

@Injectable()
export class GetSearchResultsEffect {
  getSearchResults$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getSearchFeedAction),
      switchMap(({ searchTerm }) => {
        return this.topBarService.getSearchResults(searchTerm).pipe(
          map((response) => {
            return getSearchFeedActionSuccess({ res: response });
          })
        );
      })
    )
  );

  redirectAfterSubmit$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(getSearchFeedActionSuccess),
        tap(() => {
          this.router.navigateByUrl('/searchFeed');
        })
      ),
    { dispatch: false }
  );

  constructor(
    private actions$: Actions,
    private topBarService: TopBarService,
    private router: Router
  ) {}
}
