import { Component, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-pagination-full',
  templateUrl: './pagination-full.component.html',
  styleUrls: ['./pagination-full.component.scss']
})
export class PaginationFullComponent {

  @Input() currentPage = 1;

  @Input() total = 0;

  @Input() sizePage = 1;

  @Output() change = new EventEmitter<number>();

  constructor() {}

  get totalPages(): number {
    return Math.ceil(this.total / this.sizePage);
  }

  get isFirst(): boolean {
    return this.currentPage === 1;
  }

  get isLast(): boolean {
    return this.currentPage === this.totalPages;
  }

  handlerPrevPage(): void {
    --this.currentPage;
    this.change.emit(this.currentPage);
  }

  handlerNextPage(): void {
    ++this.currentPage;
    this.change.emit(this.currentPage);
  }

  handlerLastPage(): void {
    this.currentPage = this.totalPages;
    this.change.emit(this.currentPage);
  }

  handlerFirstPage(): void {
    this.currentPage = 1;
    this.change.emit(this.currentPage);
  }
}
