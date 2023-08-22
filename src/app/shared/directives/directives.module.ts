import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImgSrcDirective } from './img-src.directive';

@NgModule({
  declarations: [ImgSrcDirective ],
  imports: [CommonModule],
  exports: [ImgSrcDirective],
})
export class DirectivesModule {}
