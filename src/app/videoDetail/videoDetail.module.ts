import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { GetRelatedFeedService } from '../shared/services/getRelatedFeed.service';
import { GetVideoStatisticService } from '../shared/services/getVideoStatistics.service';

import { VideosModule } from '../videos/videos.module';
import { YoutubePlayerModule } from '../youtubePlayer/youtubePlayer.module';
import { VideoDetailComponent } from './components/videoDetail.component';
import { getRelatedResultsReducer } from './store/actions/reducers';
import { GetRelatedSearchResultsEffect } from './store/effects/getRelatedSearchResults.effect';

const routes = [
  {
    path: 'videoDetail/:videoId',
    component: VideoDetailComponent,
  },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    StoreModule.forFeature('getRelatedFeeds', getRelatedResultsReducer),
    EffectsModule.forFeature([GetRelatedSearchResultsEffect]),
    YoutubePlayerModule,
    VideosModule,
  ],
  declarations: [VideoDetailComponent],
  exports: [VideoDetailComponent],
  providers: [GetRelatedFeedService, GetVideoStatisticService]
})
export class VideoDetailModule {}
