import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { TopBarService } from 'src/app/shared/services/topBar.service';

@Component({
  selector: 'yt-topbar',
  templateUrl: './topBar.component.html',
  styleUrls: ['./topBar.component.scss'],
})
export class TopBarComponent implements OnInit {
  form!:FormGroup;

  constructor(private fb: FormBuilder, private searchSrv: TopBarService) {}

  ngOnInit(): void {
    this.initializeForm();
    this.searchSrv.getSearchResults().subscribe();
  }

  initializeForm() {
    this.form = this.fb.group({
      searchTerm: [""]
    })
  }

  onSubmit() {
    console.log('onSubmit')
  }
}
