import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { ChannelService } from 'src/app/shared/services/channelService';
import { getChannelDetailsAction, getChannelVideosAction } from '../store/actions/getChannelDetails.action';
import { channelDetailsSelector, channelVideosSelector } from '../store/selectors';

@Component({
  selector: 'yt-channelDetail',
  templateUrl: './channelDetail.component.html',
  styleUrls: ['./channelDetail.component.scss'],
})
export class ChannelDetailComponent implements OnInit {
  channelId: string;
  isLoading$: Observable<boolean>;
  videos$:Observable<any[]>;
  channelDetails$

  constructor(
    private channelService: ChannelService,
    private route: ActivatedRoute,
    private store: Store
  ) {}

  ngOnInit(): void {
    this.initializeValues();
    this.fetchData();
  }

  initializeValues(): void {
    this.channelId = this.route.snapshot.paramMap.get('channelId');
    // this.isLoading$ = this.store.pipe(select(isLoadingSelector));
    this.videos$ = this.store.pipe(select(channelVideosSelector));
    this.channelDetails$ = this.store.pipe(select(channelDetailsSelector));
  }

  fetchData(): void {
    this.store.dispatch(getChannelDetailsAction({ channelId: this.channelId }));
    this.store.dispatch(getChannelVideosAction({ channelId: this.channelId }));
  }
}
