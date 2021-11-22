export interface FetchRedditFeedPayload {
  pageSize: number;
  subredditName: string;
  dir?: FetchMode;
}

export enum FetchMode {
  AFTER,
  BEFORE,
}

export class FetchRedditFeed {
  static readonly type = '[Feed] Fetch Reddit feed';
  constructor(public payload: FetchRedditFeedPayload) {}
}
