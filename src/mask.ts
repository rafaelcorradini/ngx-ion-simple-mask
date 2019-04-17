import { Injectable } from '@angular/core';

/** Mask used on answer component */
@Injectable()
export abstract class Mask {
  // default patterns
  protected abstract patterns: any;
  abstract mask: string;

  constructor() { }

  /**
   * checks if the char is special, that is, if is a pattern
   * @param char value to check
   * @returns true is special, false if is not
   */
  protected isSpecialChar(char: string) {
    let found = false;
    Object.keys(this.patterns).forEach((key) => {
      if (key === char) {
        found = true;
        return found;
      }
    });

    return found;
  }

  /**
   * Fits the value with the mask and return a formatted value
   * @param value value to fit
   * @returns formatted value
   */
  protected fitToMask(value: string): string {
    let newValue = '';
    // value size adjust to mask size
    const size = this.mask.replace('\\', '').length;
    value = value.substring(0, size);

    for (let i = 0, j = 0; j < this.mask.length && i < value.length; i++, j++) {
      // ignore next special char
      if (this.mask[j] === '\\') {
        newValue += this.mask[j + 1];
        j++;
        continue;
      }
      // test special char
      if (this.isSpecialChar(this.mask[j])) {
        if (this.patterns[this.mask[j]].test(value[i])) {
          newValue += value[i];
        } else {
          return newValue;
        }
      } else {
        newValue += this.mask[j];
        if (this.mask[j] !== value[i]) {
          i--;
        }
      }
    }
    return newValue;
  }
}