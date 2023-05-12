import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, tap } from 'rxjs';
import { ChannelResponseInterface } from 'src/app/channelDetail/types/channelResponse.interface';

import { environment } from 'src/environments/environment';

const API_URL = environment.API_URL;
const API_KEY = environment.API_KEY;
const API_HOST = environment.API_HOST;

@Injectable()
export class ChannelService {
  constructor(private http: HttpClient) {}

  getChannelDetail(channelId: string): Observable<ChannelResponseInterface> {
    return this.http.get<ChannelResponseInterface>(`${API_URL}/channels`, {
      params: {
        id: channelId,
        part: 'snippet',
        maxResults: '50',
      },
      headers: {
        'x-rapidapi-host': API_HOST,
        'x-rapidapi-key': API_KEY,
      },
    }).pipe(
        map((response) => response)
    )
  }

  getChannelVideos(channelId: string): Observable<ChannelResponseInterface> {
    return this.http.get<ChannelResponseInterface>(`${API_URL}/search`, {
      params: {
        channelId: channelId,
        part: 'snippet',
        maxResults: '50',
        order: 'date'
      },
      headers: {
        'x-rapidapi-host': API_HOST,
        'x-rapidapi-key': API_KEY,
      },
    }).pipe(
        map((response) => response)
    )
  }
}
