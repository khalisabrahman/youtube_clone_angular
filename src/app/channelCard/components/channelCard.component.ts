import { Component, Input } from '@angular/core';

@Component({
  selector: 'yt-channelCard',
  templateUrl: './channelCard.component.html',
  styleUrls: ['./channelCard.component.scss'],
})
export class ChannelCardComponent {
    @Input('channelDetail') channelDetailProp:any
}
