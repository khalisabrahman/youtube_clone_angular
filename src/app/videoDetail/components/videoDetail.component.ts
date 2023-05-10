import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Observable, map } from 'rxjs';
import { getRelatedSearchFeedAction } from '../store/actions/getRelatedSearchFeed.action';
import { isLoadingSelector, searchRelatedResultSelector } from '../store/selectors';

@Component({
  selector: 'yt-videoDetail',
  templateUrl: './videoDetail.component.html',
  styleUrls: ['./videoDetail.component.scss'],
})
export class VideoDetailComponent implements OnInit {
  videos$: Observable<any[]>;
  isLoading$: Observable<boolean>;
  // videoId$: Observable<string>;
  videoId: string;

  constructor(private store: Store, private route: ActivatedRoute) {}

  ngOnInit(): void {
    // this.initializeListeners();
    this.initializeValues();
    this.fetchData();
  }

  initializeListeners(): void {
    // this.videoId$ = this.route.paramMap.pipe(
    //   map((params: ParamMap) => params.get('videoId'))
    // );

    // this.videoId$.subscribe((param) => {
    //   this.videoId = param;

    //   this.initializeValues();
    // });

    
  }

  initializeValues(): void {
    this.videoId = this.route.snapshot.paramMap.get("videoId");
    this.isLoading$ = this.store.pipe(select(isLoadingSelector));

    this.videos$ = this.store.pipe(select(searchRelatedResultSelector));
  }

  fetchData(): void {
    this.store.dispatch(getRelatedSearchFeedAction({ videoId: this.videoId}))
  }


}
