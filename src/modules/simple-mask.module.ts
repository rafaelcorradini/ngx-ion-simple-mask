import { NgModule } from '@angular/core';
import { SimpleMaskDirective } from './../directives/simple-mask.directive';
import { SimpleMaskPipe } from './../pipes/simple-mask.pipe';

@NgModule({
  declarations: [
    SimpleMaskDirective,
    SimpleMaskPipe
  ],
  exports: [
    SimpleMaskDirective,
    SimpleMaskPipe
  ]
})

export class SimpleMaskModule {}
