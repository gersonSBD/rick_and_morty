import {
  Attribute,
  Component,
  EventEmitter,
  Input,
  Output,
  Self,
} from '@angular/core';
import { NgControl, FormControl } from '@angular/forms';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss'],
})
export class SelectComponent {
  @Input() options: any[] = [];

  @Output() valueChange = new EventEmitter<any>();

  value: any;

  constructor(
    @Self() private control: NgControl,
    @Attribute('placeholder') public placeholder: string,
    @Attribute('label') public label: string
  ) {
    this.control.valueAccessor = this;
  }

  get formControl(): FormControl {
    return this.control.control as FormControl;
  }

  handlerValueChange(value: any): void {
    this.valueChange.emit(value);
  }

  onChange = () => {};

  onTouch = () => {};

  writeValue(value: string): void {
    if (value) {
      this.value = value;
    } else {
      this.value = '';
    }
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouch = fn;
  }
}
