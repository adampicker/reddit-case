import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-table-header',
  templateUrl: './table-header.component.html',
  styleUrls: ['./table-header.component.scss'],
})
export class TableHeaderComponent implements OnInit {
  @Output()
  subredditNameChange = new EventEmitter<string>();
  DEFAULT_SUBREDDIT_NAME = 'sweden';
  subredditName!: string;

  constructor() {}

  ngOnInit(): void {
    this.subredditName = this.DEFAULT_SUBREDDIT_NAME;
    this.onEnter();
  }

  onEnter() {
    this.subredditNameChange.emit(this.subredditName);
  }
}
