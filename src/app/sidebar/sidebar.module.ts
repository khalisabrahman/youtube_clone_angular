import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

import { SidebarComponent } from './components/sidebar.component';

@NgModule({
    imports: [CommonModule, MatIconModule],
    declarations: [SidebarComponent],
    exports: [SidebarComponent]
})

export class SidebarModule{}