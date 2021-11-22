import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { RedditEntry } from '../../model/feed.model';
import { FeedStore } from '../../store/feed.state';
import { Select, Store } from '@ngxs/store';
import { FetchMode, FetchRedditFeed } from '../../store/feed.action';

@Component({
  selector: 'app-entry-table',
  templateUrl: './entry-table.component.html',
  styleUrls: ['./entry-table.component.scss'],
})
export class EntryTableComponent implements OnInit {
  @Select(FeedStore.entries)
  entries$!: Observable<RedditEntry[]>;
  data: RedditEntry[] = [];

  subredditName: string = '';
  pageSizes = [5, 10, 25];
  selectedPageSize = this.pageSizes[0];

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.entries$.subscribe((data) => {
      this.data = data ?? [];
    });
  }
  onSubredditNameChange(val: string) {
    this.subredditName = val;
    this.getPage();
  }

  onPrevPage() {
    this.getPage(FetchMode.BEFORE);
  }

  onNextPage() {
    this.getPage(FetchMode.AFTER);
  }

  onPageSize(size: number) {
    this.selectedPageSize = size;
    this.getPage();
  }

  getPage(dir?: FetchMode) {
    this.store.dispatch(
      new FetchRedditFeed({
        subredditName: this.subredditName,
        pageSize: this.selectedPageSize,
        ...(dir != void 0 ? { dir: dir } : null),
      })
    );
  }
}
