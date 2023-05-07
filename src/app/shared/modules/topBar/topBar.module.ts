import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';

import { TopBarComponent } from 'src/app/shared/modules/topBar/components/topBar/topBar.component';
import { TopBarService } from '../../services/topBar.service'

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    MatToolbarModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatIconModule,
  ],
  declarations: [TopBarComponent],
  exports: [TopBarComponent],
  providers: [TopBarService]
})
export class TopBarModule {}
