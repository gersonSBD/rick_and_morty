import { IMG_DEFAULT } from '../constants/img-default.constant';
import {
  Directive,
  Input,
  HostListener,
  ElementRef,
  OnChanges,
  SimpleChanges,
} from '@angular/core';

@Directive({
  selector: 'img[appImgSrc]',
})
export class ImgSrcDirective implements OnChanges {
  @Input() appImgSrc?: string;

  constructor(private _elementRef: ElementRef) {}

  @HostListener('error')
  onErrorImage() {
    this._elementRef.nativeElement.src = IMG_DEFAULT;
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.setImageSrc();
  }

  private setImageSrc(): void {
    this._elementRef.nativeElement.src = this.appImgSrc;
  }
}
