import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Observable, map } from 'rxjs';
import { getRelatedSearchFeedAction } from '../store/actions/getRelatedSearchFeed.action';
import { getVideoStatisticsAction } from '../store/actions/getVideoStatistics.action';
import {
  isLoadingSelector,
  searchRelatedResultSelector,
  videoStatisticsSelector,
} from '../store/selectors';
import { VideoStatisticsInterface } from '../store/types/videoStatistics.interface';

@Component({
  selector: 'yt-videoDetail',
  templateUrl: './videoDetail.component.html',
  styleUrls: ['./videoDetail.component.scss'],
})
export class VideoDetailComponent implements OnInit {
  videos$: Observable<any[]>;
  isLoading$: Observable<boolean>;
  videoId: string;
  videoDetails$: Observable<VideoStatisticsInterface>;

  constructor(private store: Store, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.initializeValues();
    this.fetchData();
  }

  initializeValues(): void {
    this.videoId = this.route.snapshot.paramMap.get('videoId');
    this.isLoading$ = this.store.pipe(select(isLoadingSelector));
    this.videos$ = this.store.pipe(select(searchRelatedResultSelector));
    this.videoDetails$ = this.store.pipe(select(videoStatisticsSelector));
  }

  fetchData(): void {
    this.store.dispatch(getRelatedSearchFeedAction({ videoId: this.videoId }));
    this.store.dispatch(getVideoStatisticsAction({ videoId: this.videoId }));
  }
}
