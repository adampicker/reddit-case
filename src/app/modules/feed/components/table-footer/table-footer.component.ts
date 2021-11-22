import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-table-footer',
  templateUrl: './table-footer.component.html',
  styleUrls: ['./table-footer.component.scss'],
})
export class TableFooterComponent implements OnInit {
  @Input()
  pageSizes!: number[];
  @Input()
  selectedPageSize!: number;

  @Output()
  prevPage = new EventEmitter<void>();
  @Output()
  nextPage = new EventEmitter<void>();
  @Output()
  pageSize = new EventEmitter<number>();

  constructor() {}

  ngOnInit(): void {
    this.onPageSizeChange();
  }

  getPrevPage() {
    this.prevPage.emit();
  }

  getNextPage() {
    this.nextPage.emit();
  }

  onPageSizeChange() {
    this.pageSize.emit(this.selectedPageSize);
  }
}
