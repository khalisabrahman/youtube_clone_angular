import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import {
  getSearchResultsReducer,
  reducer,
} from 'src/app/searchFeed/store/actions/reducers';
import { SearchFeedComponent } from 'src/app/searchFeed/components/searchFeed.component';
import { TopBarService } from '../shared/services/topBar.service';
import { RouterModule } from '@angular/router';
import { EffectsModule } from '@ngrx/effects';
import { GetSearchResultsEffect } from './store/effects/getSearchResults.effect';
const routes = [
  {
    path: 'searchFeed',
    component: SearchFeedComponent,
  },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    StoreModule.forFeature('searchFeed', getSearchResultsReducer),
    EffectsModule.forFeature([
        GetSearchResultsEffect
    ])
  ],
  declarations: [SearchFeedComponent],
  exports: [SearchFeedComponent],
  providers: [TopBarService],
})
export class SearchFeedModule {}
