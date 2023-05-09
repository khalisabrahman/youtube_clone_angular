import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, tap } from 'rxjs';

import { environment } from 'src/environments/environment';
import { SearchResponseInterface } from 'src/app/searchFeed/types/searchResponse.interface';

const API_URL = environment.API_URL;
const API_KEY = environment.API_KEY;
const API_HOST = environment.API_HOST;

@Injectable()
export class GetFeedService {
  constructor(private http: HttpClient) {}

  getFeedResults(selectedCategory: string): Observable<SearchResponseInterface> {
    return this.http
      .get<SearchResponseInterface>(`${API_URL}/search`, {
        params: {
          q: selectedCategory,
          part: 'snippet',
          regionCode: 'US',
          maxResults: '50',
        //   order: 'date',
        },
        headers: {
          'x-rapidapi-host': API_HOST,
          'x-rapidapi-key': API_KEY,
        },
      })
      .pipe(
        tap((res) => console.log(res)),
        map((response) => response)
      );
  }
}
