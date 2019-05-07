[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://raw.githubusercontent.com/rafaelcorradini/ngx-ion-simple-mask/master/LICENSE)
[![Build Status](https://travis-ci.com/rafaelcorradini/ngx-ion-simple-mask.svg?branch=master)](https://travis-ci.com/rafaelcorradini/ngx-ion-simple-mask)
# ngx-ion-simple-Mask

Input mask for Angular/Ionic (Tested with Ionic 4)

## <a name="1"></a> Installing

```bash
$ npm install --save ngx-ion-simple-mask
```

## <a name="2"></a> Usage

Import ngx-ion-simple-mask module in Angular app.
```typescript
import { SimpleMaskModule } from 'ngx-ion-simple-mask'

@NgModule({
  imports: [
    SimpleMaskModule
  ]
})
```

Or import the directive/pipe separately
```typescript
import { SimpleMaskDirective, SimpleMaskPipe } from 'ngx-ion-simple-mask'

@NgModule({
  declarations: [
    SimpleMaskDirective,
    SimpleMaskPipe
  ]
})
```

### Ionic

ionic usage example:
```html
<ion-input simpleMask="999.999.999-99" [clearIfNotMatch]="true"></ion-input>
```

### Angular

Angular usage example:
```html
<input simpleMask="999.999.999-99" [clearIfNotMatch]="true">
```

### Form Control/NgModel

The libray works with Form Control and ngModel:
```html
<input simpleMask="999.999.999-99" [formControl]="formControl">
```

```html
<input simpleMask="999.999.999-99" [(ngModel)]="value">
```

### Pipe

#### example
```html
<p>{{ '123321123-12' | simpleMask:'999.999.999-99' }}<p>
```
output: 
```html
<p>123.321.123-12</p>
```

#### example with add patterns
```html
<p>{{ 'asd-123' | simpleMask:'aaa-II':{'I': '[0-9]' } }}<p>
```
output: 
```html
<p>123.321.123-12</p>
```

#### example with new patterns(ignoring old patterns)
```html
<p>{{ '123-bddd' | simpleMask:'III-aaa':{'I': '[0-9]' }:true }}<p>
```
output: 
```html
<p>123-aaa</p>
```

## <a name="3"></a>Patterns
### Default patterns:

```typescript
patterns = {
    '9': new RegExp('[0-9]'),
    'a': new RegExp('[a-z]'),
    'A': new RegExp('[A-Z]'),
    'x': new RegExp('[a-zA-Z]'),
    '*': new RegExp('[a-zA-Z0-9]'),
    '~': new RegExp('[-\+]')
};
```

| pattern | meaning |
|------|---------|
| **9** | digits (0-9) |
| **a** | lowercase letters (a-z) |
| **A** | uppercase letters (A-Z) |
| **x** | letters uppercase or lowercase (a-z, A-Z) |
|  **~** | - or + |
| **\*** | letters or digits (a-z, A-Z, 0-9) |
|  **\\** | cancel next pattern effect |

#### Examples

| mask | example |
| ------- | ------- |
| 999.999.aaa | 113.123.asd |
| (AA) 999 | (AS) 123 |
| 999\\\~ | 999~ |

### Set new patterns

The set strings will be used as regex
```html
<input
    simpleMask="IIIxxx"
    [newPatterns]="{ 'I', '[a-z]', 'x', '[0-9]' }">
```
example of input: abc123

### Add patterns

The set strings will be used as regex
```html
<input simpleMask="~III999" [addPatterns]="{ 'I', '[a-z]' }">
```
example of input: +abc123

## angular-library-starter
The project was built with [angular-library-starter](https://github.com/robisim74/angular-library-starter/).

## License
MIT
