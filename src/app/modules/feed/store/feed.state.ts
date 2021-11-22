import { State, Selector, Action, StateContext } from '@ngxs/store';
import { Injectable } from '@angular/core';
import { FetchMode, FetchRedditFeed } from './feed.action';
import { RedditApiService } from 'src/app/core/http/reddit-api.service';
import { RedditEntry, RedditEntryDto } from '../model/feed.model';

export interface RedditFeedState {
  entries: RedditEntry[];
}

@State<RedditFeedState>({
  name: 'feed',
  defaults: {
    entries: [],
  },
})
@Injectable()
export class FeedStore {
  constructor(private redditApiService: RedditApiService) {}

  @Selector()
  static entries(state: RedditFeedState): RedditEntry[] {
    return state.entries;
  }

  @Action(FetchRedditFeed)
  fetchRedditFeed(
    ctx: StateContext<RedditFeedState>,
    { payload }: FetchRedditFeed
  ) {
    const state = ctx.getState();
    this.redditApiService
      .getRedditFeed(
        payload.subredditName,
        payload.pageSize,
        payload.dir === FetchMode.AFTER
          ? state.entries[payload.pageSize - 1]?.name
          : void 0,
        payload.dir === FetchMode.BEFORE ? state.entries[0]?.name : void 0
      )
      .subscribe((res) => {
        let mappedEntries: RedditEntry[] = res.data.children.map((dto) =>
          this.mapDto(dto)
        );
        ctx.patchState({
          entries: mappedEntries.slice(0, payload.pageSize),
        });
      });
  }

  private mapDto(dto: { data: RedditEntryDto }): RedditEntry {
    return {
      thumbnail: dto.data.thumbnail,
      created: dto.data.created,
      num_comments: dto.data.num_comments,
      author: dto.data.author,
      score: dto.data.score,
      title: dto.data.title,
      selftext: dto.data.selftext,
      name: dto.data.name,
    };
  }
}
