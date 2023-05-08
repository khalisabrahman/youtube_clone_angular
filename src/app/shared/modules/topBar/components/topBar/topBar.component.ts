import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';

import { TopBarService } from 'src/app/shared/services/topBar.service';
import { getSearchFeedAction } from 'src/app/searchFeed/store/actions/getSearchFeed.action';
import { Router } from '@angular/router';

@Component({
  selector: 'yt-topbar',
  templateUrl: './topBar.component.html',
  styleUrls: ['./topBar.component.scss'],
})
export class TopBarComponent implements OnInit {
  form!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private searchSrv: TopBarService,
    private store: Store,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.initializeForm();
  }

  initializeForm() {
    this.form = this.fb.group({
      searchTerm: [''],
    });
  }

  onSubmit(): void {
    this.router.navigateByUrl(
      `searchFeed?searchTerm=${this.form.value.searchTerm}`
    );
  }
}
