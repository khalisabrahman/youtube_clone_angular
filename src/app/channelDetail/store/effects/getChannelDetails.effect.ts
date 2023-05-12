import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, switchMap } from 'rxjs';

import { ChannelService } from 'src/app/shared/services/channelService';
import {
  getChannelDetailsAction,
  getChannelDetailsSuccessAction,
  getChannelVideosAction,
  getChannelVideosSuccessAction,
} from '../actions/getChannelDetails.action';

@Injectable()
export class GetChannelDetailsEffect {
  getChannelDetailsEffect$ = createEffect(() => {
    return this.action$.pipe(
      ofType(getChannelDetailsAction),
      switchMap(({ channelId }) => {
        return this.channelService.getChannelDetail(channelId).pipe(
          map((response) => {
            return getChannelDetailsSuccessAction({ res: response });
          })
        );
      })
    );
  });

  getChannelVideosEffect$ = createEffect(() => {
    return this.action$.pipe(
      ofType(getChannelVideosAction),
      switchMap(({ channelId }) => {
        return this.channelService.getChannelVideos(channelId).pipe(
          map((response) => {
            return getChannelVideosSuccessAction({ res: response });
          })
        );
      })
    );
  });

  constructor(
    private action$: Actions,
    private channelService: ChannelService
  ) {}
}
