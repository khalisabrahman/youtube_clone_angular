import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";

import { VideoCardModule } from "../videoCard/videoCard.module";
import { VideosComponent } from "./components/videos.component";

@NgModule({
    imports: [CommonModule, VideoCardModule, RouterModule],
    declarations: [VideosComponent],
    exports: [VideosComponent]
})

export class VideosModule {}