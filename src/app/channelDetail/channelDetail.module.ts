import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { ChannelCardModule } from '../channelCard/channelCard.module';

import { ChannelService } from '../shared/services/channelService';
import { VideosModule } from '../videos/videos.module';
import { ChannelDetailComponent } from './components/channelDetail.component';
import { getChannelDetailsReducer } from './store/actions/reducers';
import { GetChannelDetailsEffect } from './store/effects/getChannelDetails.effect';

const routes = [
  {
    path: 'channel/:channelId',
    component: ChannelDetailComponent,
  },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    StoreModule.forFeature('channelDetails', getChannelDetailsReducer),
    EffectsModule.forFeature([GetChannelDetailsEffect]),
    VideosModule,
    ChannelCardModule
  ],
  declarations: [ChannelDetailComponent],
  exports: [ChannelDetailComponent],
  providers: [ChannelService],
})
export class ChannelDetailModule {}
