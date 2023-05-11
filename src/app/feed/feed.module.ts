import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatDividerModule } from '@angular/material/divider';
import { EffectsModule } from '@ngrx/effects';

import { VideosModule } from '../videos/videos.module';
import { FeedComponent } from './components/feed.component';
import { SidebarModule } from '../sidebar/sidebar.module';
import { StoreModule } from '@ngrx/store';
import { getFeedResultsReducer } from './store/actions/reducers';
import { GetSearchResultsEffect } from './store/effects/getFeed.effect';
import { GetFeedService } from '../shared/services/getFeed.service';

const routes = [
  {
    path: '',
    component: FeedComponent,
  },
];

@NgModule({
  imports: [
    CommonModule,
    VideosModule,
    RouterModule.forChild(routes),
    SidebarModule,
    VideosModule,
    StoreModule.forFeature('feed', getFeedResultsReducer),
    EffectsModule.forFeature([GetSearchResultsEffect]),
    MatDividerModule
  ],
  declarations: [FeedComponent],
  exports: [FeedComponent],
  providers: [GetFeedService],
})
export class FeedModule {}
