import { Pipe, PipeTransform } from '@angular/core';
import { SimpleMask } from '../simple-mask';

@Pipe({
  name: 'simpleMask'
})
export class SimpleMaskPipe extends SimpleMask implements PipeTransform {
  constructor() {
    super();
  }

  transform(value: string, mask: string, patterns?: any, clear: boolean = false): string {
    if (mask) {
      this.mask = mask;
    } else {
      throw new Error('A mask is required on simpleMask pipe');
    }

    if (patterns) {
      this.setPatterns(patterns, clear);
    }
    return this.fitToMask(value);
  }
}
