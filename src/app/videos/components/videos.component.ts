import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'yt-videos',
  templateUrl: './videos.component.html',
  styleUrls: ['./videos.component.scss'],
})
export class VideosComponent implements OnInit {
  @Input('videos') videosProp: any;
  @Input('direction') direction: string = 'row';
  constructor() {}

  ngOnInit(): void {
 
  }
}
