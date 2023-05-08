import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { RouterModule } from '@angular/router';

import { VideoCardComponent } from './components/videoCard.component';

@NgModule({
  imports: [CommonModule, RouterModule, MatCardModule],
  declarations: [VideoCardComponent],
  exports: [VideoCardComponent],
})
export class VideoCardModule {}
