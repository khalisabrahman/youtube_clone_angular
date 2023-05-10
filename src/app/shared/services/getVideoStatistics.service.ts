import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, tap } from 'rxjs';

import { environment } from 'src/environments/environment';
import { VideoResponseInterface } from 'src/app/videoDetail/store/types/videoStatisticsResponse.interface';

const API_URL = environment.API_URL;
const API_KEY = environment.API_KEY;
const API_HOST = environment.API_HOST;

@Injectable()
export class GetVideoStatisticService {
  constructor(private http: HttpClient) {}

  getVideoStatistics(videoId: string): Observable<VideoResponseInterface> {
    return this.http
      .get<VideoResponseInterface>(`${API_URL}/videos`, {
        params: {
          id: videoId,
          part: 'snippet, statistics',
          maxResults: '50',
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
