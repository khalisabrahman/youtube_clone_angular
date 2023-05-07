import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { isLoadingSelector } from '../store/selectors';

@Component({
  selector: 'yt-searchFeed',
  templateUrl: './searchFeed.component.html',
  styleUrls: ['./searchFeed.component.scss'],
})
export class SearchFeedComponent implements OnInit {
  isLoading$: Observable<boolean>;
  error$: Observable<string | null>;

  constructor(private store: Store) {}
  ngOnInit(): void {
    this.initializeValues();
  }

  initializeValues() {
    this.isLoading$ = this.store.pipe(select(isLoadingSelector))
  }
}
