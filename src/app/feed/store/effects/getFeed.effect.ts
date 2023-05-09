import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap, tap } from 'rxjs/operators';
import { GetFeedService } from 'src/app/shared/services/getFeed.service';

import {
  getFeedAction,
  getFeedActionSuccess,
} from '../actions/getFeed.action';

@Injectable()
export class GetSearchResultsEffect {
  getSearchResults$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getFeedAction),
      switchMap(({ selectedCategory }) => {
        return this.getFeedService.getFeedResults(selectedCategory).pipe(
          map((response) => {
            return getFeedActionSuccess({ res: response });
          })
        );
      })
    )
  );

//   redirectAfterSubmit$ = createEffect(
//     () =>
//       this.actions$.pipe(
//         ofType(getSearchFeedActionSuccess),
//         tap(() => {
//           this.router.navigateByUrl('/searchFeed');
//         })
//       ),
//     { dispatch: false }
//   );

  constructor(
    private actions$: Actions,
    private getFeedService: GetFeedService,
    private router: Router
  ) {}
}
