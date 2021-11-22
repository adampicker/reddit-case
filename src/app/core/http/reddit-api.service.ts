import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RedditResponseDto } from 'src/app/modules/feed/model/feed.model';

@Injectable({
  providedIn: 'root',
})
export class RedditApiService {
  readonly BASE_URL = 'https://www.reddit.com/r';
  readonly OUTPUT_FORMAT = 'json';

  readonly PAGE_SIZE_PARAM_NAME = 'limit';
  readonly FETCH_AFTER_PARAM_NAME = 'after';
  readonly FETCH_BEFORE_PARAM_NAME = 'before';

  constructor(private http: HttpClient) {}

  getRedditFeed(
    subredditName: string,
    pageSize: number,
    after?: string,
    before?: string
  ) {
    let params = new HttpParams();
    params = params.append(this.PAGE_SIZE_PARAM_NAME, pageSize.toString());

    if (after) params = params.append(this.FETCH_AFTER_PARAM_NAME, after);
    if (before) params = params.append(this.FETCH_BEFORE_PARAM_NAME, before);

    return this.http.get<{ data: RedditResponseDto }>(
      `${this.BASE_URL}/${subredditName}.${this.OUTPUT_FORMAT}`,
      { params: params }
    );
  }
}
