export class SimpleMask {
  protected patterns: any = {
    '9': new RegExp('[0-9]'),
    'a': new RegExp('[a-z]'),
    'A': new RegExp('[A-Z]'),
    'x': new RegExp('[a-zA-Z]'),
    '*': new RegExp('[a-zA-Z0-9]'),
    '~': new RegExp('[-\+]')
  };
  mask: string;
  /**
   * checks if the char is a pattern, that is, if is a pattern
   * @param char value to check
   * @returns true is a pattern, false if is not
   */
  protected isPattern(char: string) {
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

    for (let i = 0, j = 0; j < this.mask.length && i < value.length; i++ , j++) {
      // ignore next special char
      if (this.mask[j] === '\\') {
        newValue += this.mask[j + 1];
        j++;
        continue;
      }
      // test special char
      if (this.isPattern(this.mask[j])) {
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