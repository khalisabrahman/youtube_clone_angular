import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs';

import { environment } from 'src/environments/environment';

const API_URL = environment.API_URL;
const API_KEY = environment.API_KEY;
const API_HOST = environment.API_HOST;

@Injectable()
export class TopBarService {
  constructor(private http: HttpClient) {}

  getSearchResults() {
    return this.http
      .get<any>(`${API_URL}/search`, {
        params: {
          q: 'music',
          part: 'snippet',
          regionCode: 'US',
          maxResults: '50',
          order: 'date',
        },
        headers: {
          'x-rapidapi-host': API_HOST,
          'x-rapidapi-key': API_KEY,
        },
      })
      .pipe(tap((res) => console.log(res)));
  }
}
