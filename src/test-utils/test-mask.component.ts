import { Component } from "@angular/core";
import { FormControl } from "@angular/forms";

@Component({
  selector: "test-mask",
  template: `
    <input
      id="mask-test"
      [simpleMask]="mask"
      [clearIfNotMatch]="clearIfNotMatch"
      [addPatterns]="addPatterns"
      [newPatterns]="newPatterns"
      [formControl]="formControl"
      [(ngModel)]="ngModelValue"
    />
  `
})
export class TestMaskComponent {
  mask: string | null = "999-aaa";
  ngModelValue: string | number;
  formControl: FormControl = new FormControl(null);
  clearIfNotMatch = false;
  addPatterns: Object;
  newPatterns: Object;
}
