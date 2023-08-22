import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputComponent } from './input/input.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SelectComponent } from './select/select.component';
import { LoadingComponent } from './loading/loading.component';
import { SplashScreenComponent } from './splash-screen/splash-screen.component';
import { ButtonComponent } from './button/button.component';

@NgModule({
  declarations: [
    InputComponent,
    SelectComponent,
    LoadingComponent,
    SplashScreenComponent,
    ButtonComponent,
  ],
  imports: [CommonModule, ReactiveFormsModule],
  exports: [
    InputComponent,
    SelectComponent,
    LoadingComponent,
    SplashScreenComponent,
    ButtonComponent,
  ],
})
export class AtomsModule {}
