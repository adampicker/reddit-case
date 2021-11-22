import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeedRoutingModule } from './feed-routing.module';
import { FeedContainerComponent } from './pages/feed-container/feed-container.component';
import { RedditEntryComponent } from './components/reddit-entry/reddit-entry.component';
import { EntryTableComponent } from './components/entry-table/entry-table.component';
import { TableHeaderComponent } from './components/table-header/table-header.component';
import { TableFooterComponent } from './components/table-footer/table-footer.component';
import { FormsModule } from '@angular/forms';
import { ThumbnailComponent } from './components/thumbnail/thumbnail.component';

@NgModule({
  declarations: [
    FeedContainerComponent,
    RedditEntryComponent,
    EntryTableComponent,
    TableHeaderComponent,
    TableFooterComponent,
    ThumbnailComponent,
  ],
  imports: [CommonModule, FormsModule, FeedRoutingModule],
})
export class FeedModule {}
