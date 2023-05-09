import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Observable, map } from 'rxjs';

@Component({
  selector: 'yt-player',
  templateUrl: './youtubePlayer.component.html',
})
export class YoutubePlayerComponent implements OnInit {
  apiLoaded = false;
  videoId$: Observable<string>;
  videoId: string;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.loadYoutubeAPI();
    this.initializeListeners();
  }

  loadYoutubeAPI() {
    if (!this.apiLoaded) {
      // This code loads the IFrame Player API code asynchronously, according to the instructions at
      // https://developers.google.com/youtube/iframe_api_reference#Getting_Started
      const tag = document.createElement('script');
      tag.src = 'https://www.youtube.com/iframe_api';
      document.body.appendChild(tag);
      this.apiLoaded = true;
    }
  }

  initializeListeners(): void {
    this.videoId$ = this.route.paramMap.pipe(
      map((params: ParamMap) => params.get('videoId'))
    );

    this.videoId$.subscribe((param) => {
      this.videoId = param;
    });
  }
}
