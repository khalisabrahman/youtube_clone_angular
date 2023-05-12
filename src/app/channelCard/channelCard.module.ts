import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatCardModule } from '@angular/material/card';

import { ChannelCardComponent } from './components/channelCard.component';

@NgModule({
  imports: [CommonModule, RouterModule, MatCardModule],
  declarations: [ChannelCardComponent],
  exports: [ChannelCardComponent],
})
export class ChannelCardModule {}
