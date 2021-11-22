export interface RedditResponseDto {
  after: string;
  before: string;
  children: { data: RedditEntryDto }[];
  dist: number;
  geo_filter: any;
  modhash: string;
}

export interface RedditEntry {
  thumbnail: string;
  created: number;
  num_comments: number;
  author: string;
  score: string;
  title: string;
  selftext: string;
  name: string;
}

export interface RedditEntryDto extends RedditEntry {}
