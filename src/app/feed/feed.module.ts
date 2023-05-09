import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';


import { VideosModule } from '../videos/videos.module';
import { FeedComponent } from './components/feed.component';
import { SidebarModule } from '../sidebar/sidebar.module';

const routes = [
  {
    path: '',
    component: FeedComponent,
  },
];

@NgModule({
  imports: [CommonModule, VideosModule, RouterModule.forChild(routes), SidebarModule],
  declarations: [FeedComponent],
  exports: [FeedComponent],
})
export class FeedModule {}
