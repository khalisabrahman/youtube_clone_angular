import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { YoutubePlayerModule } from '../youtubePlayer/youtubePlayer.module';
import { VideoDetailComponent } from './components/videoDetail.component';

const routes = [
  {
    path: 'videoDetail/:videoId',
    component: VideoDetailComponent,
  },
];
@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes), YoutubePlayerModule],
  declarations: [VideoDetailComponent],
  exports: [VideoDetailComponent],
})
export class VideoDetailModule {}
