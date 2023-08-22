import { Component, OnDestroy, EventEmitter, Output, Input } from '@angular/core';
import { Subscription, debounceTime, distinctUntilChanged } from 'rxjs';
import { FormControl } from '@angular/forms';
import { LoadingBarService } from '../../../shared/services/loading-bar.service';
import { IFilterCharacter } from '../../../shared/interfaces/filter-character.interface';
import { IStatusOption } from '../../../shared/interfaces/status-option.interface';
import { STATUSES_OPTIONS } from '../../../shared/constants/statuses-options.constants';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss'],
})
export class FiltersComponent implements OnDestroy {
  @Output() filtersEvent = new EventEmitter<IFilterCharacter>();
  @Input() showStatusOptions: boolean = true;

  subscriptions: Subscription[] = [];

  nameControl = new FormControl();

  statusControl = new FormControl();

  isLoading = false;

  filters: IFilterCharacter;

  constructor() {
    this.filters = {};
    this.setLoadingSubscription();
    this.setFilterByNameSubscription();
  }

  get statusOptions(): IStatusOption [] {
    return STATUSES_OPTIONS;
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((item) => item.unsubscribe());
  }

  setFilterByNameSubscription(): void {
    this.subscriptions.push(
      this.nameControl.valueChanges
        .pipe(debounceTime(400), distinctUntilChanged())
        .subscribe((value) => {
          this.filters.name = value;
          this.filtersEvent.emit(this.filters);
        })
    );
  }

  setLoadingSubscription(): void {
    this.subscriptions.push(
      LoadingBarService.onLoading().subscribe(
        (value: boolean) => (this.isLoading = value)
      )
    );
  }

  handlerStatusChange(value: any): void {
    this.filters.status = value.target.value;
    this.filtersEvent.emit(this.filters);
  }
}
