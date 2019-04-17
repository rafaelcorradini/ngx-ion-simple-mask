import { Pipe, PipeTransform } from '@angular/core';
import { Mask } from 'src/mask';

@Pipe({
  name: 'maskText'
})
export class MaskTextPipe extends Mask implements PipeTransform {
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

  transform(value: any, mask: string, patterns?: any): any {
    if (mask) {
      this.mask = mask;
    } else {
      throw new Error('A mask is required on maskText pipe');
    }
    if (patterns) {
      this.patterns = patterns;
    }
    return this.fitToMask(value);
  }
}
