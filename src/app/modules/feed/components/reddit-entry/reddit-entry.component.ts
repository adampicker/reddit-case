import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Store } from '@ngxs/store';
import { RedditEntry } from '../../model/feed.model';
import { FetchRedditFeed } from '../../store/feed.action';

@Component({
  selector: 'app-reddit-entry',
  templateUrl: './reddit-entry.component.html',
  styleUrls: ['./reddit-entry.component.scss'],
})
export class RedditEntryComponent implements OnInit {
  @Input()
  redditEntry!: RedditEntry;

  expanded = false;

  constructor() {}

  ngOnInit(): void {}

  getDate(unixTimestamp: number) {
    return new Date(unixTimestamp * 1000);
  }
}
