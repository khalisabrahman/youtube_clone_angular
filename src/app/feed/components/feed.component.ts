import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { getFeedAction } from '../store/actions/getFeed.action';
import { searchResultSelector } from '../store/selectors';

@Component({
  selector: 'yt-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss'],
})
export class FeedComponent implements OnInit {
  selectedCategory: string = 'New';
  data$: Observable<any>

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.store.dispatch(
      getFeedAction({ selectedCategory: this.selectedCategory })
    );

    this.initializeValues();
  }

  initializeValues() {
    this.data$ = this.store.pipe(select(searchResultSelector));
  }
}
