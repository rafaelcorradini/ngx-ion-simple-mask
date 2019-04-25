import { Pipe, PipeTransform } from '@angular/core';
import { SimpleMask } from '../simple-mask';

@Pipe({
  name: 'simpleMask'
})
export class SimpleMaskPipe extends SimpleMask implements PipeTransform {
  // default patterns
  protected patterns: any = {
    '9': new RegExp('[0-9]'),
    'a': new RegExp('[a-z]'),
    'A': new RegExp('[A-Z]'),
    'x': new RegExp('[a-zA-Z]'),
    '*': new RegExp('[a-zA-Z0-9]'),
    '~': new RegExp('[-\+]')
  };
  mask: string;

  constructor() {
    super();
  }

  transform(value: string, mask: string, patterns?: any): string {
    if (mask) {
      this.mask = mask;
    } else {
      throw new Error('A mask is required on simpleMask pipe');
    }

    if (patterns) {
      this.patterns = {};
      Object.keys(patterns).forEach((key) => {
        this.patterns[key] = new RegExp(patterns[key]);
      });
    }
    return this.fitToMask(value);
  }
}
