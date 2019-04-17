import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MaskTextDirective } from '../directives/mask-text.directive';

@NgModule({
  imports: [
    ReactiveFormsModule
  ],
  declarations: [
    MaskTextDirective
  ],
  exports: [
    MaskTextDirective
  ]
})

export class ArithmeticModule {}
