import { FormControl } from "@angular/forms";
import { Component } from "@angular/core";

@Component({
  selector: "test-ion-mask",
  template: `
    <ion-input
      id="mask-test"
      [simpleMask]="mask"
      [clearIfNotMatch]="clearIfNotMatch"
      [addPatterns]="addPatterns"
      [fillWithExpected]="fillWithExpected"
      [newPatterns]="newPatterns"
      [formControl]="formControl"
      [(ngModel)]="ngModelValue"
    >
    </ion-input>
  `
})
export class TestMaskIonComponent {
  mask: string | null = "999-aaa";
  ngModelValue: string | number;
  formControl: FormControl = new FormControl(null);
  clearIfNotMatch = false;
  fillWithExpected = false;
  addPatterns: Object;
  newPatterns: Object;
}
