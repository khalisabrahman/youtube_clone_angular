import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { map } from 'rxjs';
import { Observable, skip, Subscription, tap } from 'rxjs';
import { getSearchFeedAction } from '../store/actions/getSearchFeed.action';
import { isLoadingSelector, searchResultSelector } from '../store/selectors';

@Component({
  selector: 'yt-searchFeed',
  templateUrl: './searchFeed.component.html',
  styleUrls: ['./searchFeed.component.scss'],
})
export class SearchFeedComponent implements OnInit {
  queryParamsSubscription: Subscription;
  isLoading$: Observable<boolean>;
  data$: Observable<any>;
  error$: Observable<string | null>;
  searchTerm$: Observable<string>;

  constructor(private store: Store, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.initializeListeners();
    this.initializeValues();
  }

  initializeListeners(): void {
    this.searchTerm$ = this.route.queryParamMap.pipe(
      map((params: ParamMap) => params.get('searchTerm'))
    );

    // Should you unsubscribe from the queryParamMap Observable? Nope! There’s no need. Angular’s router will manage the subscriptions for you, so this makes it a little bit easier and cleaner for us on the component class.
    this.searchTerm$.subscribe((param) => {
      this.fetchSearchFeed(param);
    });
  }

  initializeValues(): void {
    this.isLoading$ = this.store.pipe(select(isLoadingSelector));

    this.data$ = this.store.pipe(select(searchResultSelector));
  }

  fetchSearchFeed(searchTerm) {
    this.store.dispatch(getSearchFeedAction({ searchTerm }));
  }
}
