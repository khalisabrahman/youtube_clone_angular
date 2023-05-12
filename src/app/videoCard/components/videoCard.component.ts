import {
  Component,
  Input,
  OnInit,
  SimpleChanges,
  OnChanges,
} from '@angular/core';

@Component({
  selector: 'yt-video',
  templateUrl: './videoCard.component.html',
  styleUrls: ['./videoCard.component.scss'],
})
export class VideoCardComponent implements OnInit {
  @Input('video') videoProps;

  constructor() {}

  ngOnInit(): void {
  
  }

  handleClick() {
    window.scroll(0,0);
  }
}
