import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { getFeedAction } from 'src/app/feed/store/actions/getFeed.action';

@Component({
  selector: 'yt-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent {
  categories = [
    { name: 'New', icon: 'home' },
    { name: 'Coding', icon: 'code' },
    { name: 'ReactJS', icon: 'code' },
    { name: 'NextJS', icon: 'code' },
    { name: 'Angular', icon: 'code' },
    { name: 'Music', icon: 'library_music' },
    { name: 'Education', icon: 'school' },
    { name: 'Podcast', icon: 'podcasts' },
    { name: 'Movie', icon: 'movie' },
    { name: 'Gaming', icon: 'sports_esports' },
    { name: 'Live', icon: 'live_tv' },
    { name: 'Sport', icon: 'sports_basketball' },
    { name: 'Gym', icon: 'fitness_center' },
    { name: 'Comedy', icon: 'theater_comedy' },
    { name: 'Fashion', icon: 'diamond' },
  ];

  constructor(private store: Store) {}

  handleClick(category): void {
    this.store.dispatch(getFeedAction({ selectedCategory: category }));
  }
}
