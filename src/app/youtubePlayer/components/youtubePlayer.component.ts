import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Observable, map } from 'rxjs';

@Component({
  selector: 'yt-player',
  templateUrl: './youtubePlayer.component.html',
})
export class YoutubePlayerComponent implements OnInit, AfterViewInit {
  @ViewChild('youTubePlayer') youTubePlayer: ElementRef<HTMLDivElement>;

  videoHeight: number | undefined;
  videoWidth: number | undefined;
  apiLoaded = false;
  videoId$: Observable<string>;
  videoId: string;
  changeDetectorRef: any;

  constructor(private route: ActivatedRoute) {}

  ngAfterViewInit(): void {
    this.onResize();
    window.addEventListener('resize', this.onResize.bind(this));
  }

  onResize(): void {
    // you can remove this line if you want to have wider video player than 1200px
    (this.videoWidth = this.youTubePlayer.nativeElement.clientWidth),
      // so you keep the ratio
      (this.videoHeight = this.videoWidth * 0.6);
    this.changeDetectorRef.detectChanges();
  }

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
