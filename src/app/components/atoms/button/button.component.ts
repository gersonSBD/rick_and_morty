import { Attribute, Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent {
  @Input() disabled?: boolean;

  @Output() clickEvent = new EventEmitter<void>();

  constructor(@Attribute('text') public text: string) {}

  handlerClick(): void {
    this.clickEvent.emit();
  }
}
