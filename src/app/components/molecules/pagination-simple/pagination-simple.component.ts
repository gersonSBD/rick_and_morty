import { Component, Input, Output, EventEmitter } from '@angular/core';
import { IPagination } from '../../../shared/interfaces/pagination.interface';

@Component({
  selector: 'app-pagination-simple',
  templateUrl: './pagination-simple.component.html',
  styleUrls: ['./pagination-simple.component.scss']
})
export class PaginationSimpleComponent {

  @Input() pagination?: IPagination;

  @Input() currentPage = 1;

  @Output() changePageEvent = new EventEmitter<number>();

  constructor() {}

  get disabledPrevButton(): boolean {
    return this.currentPage === 1;
  }
 

  handlerNextPage(): void {
    this.changePageEvent.emit(++this.currentPage);
  }

  handlerPrevPage(): void {
    this.changePageEvent.emit(--this.currentPage);
  }

}
