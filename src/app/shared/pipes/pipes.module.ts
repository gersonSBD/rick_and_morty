import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FirstUppercasePipe } from './first-uppercase.pipe';

@NgModule({
  declarations: [FirstUppercasePipe],
  imports: [CommonModule],
  exports: [FirstUppercasePipe],
})
export class PipesModule {}
