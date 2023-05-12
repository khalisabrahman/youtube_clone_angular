import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { ChannelCardModule } from "../channelCard/channelCard.module";

import { VideoCardModule } from "../videoCard/videoCard.module";
import { VideosComponent } from "./components/videos.component";

@NgModule({
    imports: [CommonModule, VideoCardModule, ChannelCardModule, RouterModule],
    declarations: [VideosComponent],
    exports: [VideosComponent]
})

export class VideosModule {}