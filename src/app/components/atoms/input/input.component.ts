import {
  Component,
  Output,
  EventEmitter,
  Self,
  Attribute,
} from '@angular/core';
import { NgControl, FormControl } from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
})
export class InputComponent {
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
