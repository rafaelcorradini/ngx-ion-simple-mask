import { ReactiveFormsModule } from '@angular/forms';
import { TestBed, ComponentFixture } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { SimpleMaskDirective } from './simple-mask.directive';
import { TestMaskComponent } from './../test-utils/test-mask.component';
import { TestMaskIonComponent } from './../test-utils/test-mask-ion.component';

function inputTest(
  inputValue: string,
  fixture: ComponentFixture<TestMaskComponent>
): string {
  fixture.detectChanges();
  const el = fixture.nativeElement.querySelector('input');
  el.value = inputValue;
  el.dispatchEvent(new Event('input'));

  fixture.detectChanges();
  return el.value;
}

function ionInputTest(
    inputValue: string,
    fixture: ComponentFixture<TestMaskIonComponent>
  ): string {
    fixture.detectChanges();
    const el = fixture.nativeElement.querySelector('ion-input');
    el.value = inputValue;
    el.dispatchEvent(new Event('input'));
  
    fixture.detectChanges();
    return el.value;
  }

describe('SimpleMaskDirective with ion-input', () => {
  let fixture: ComponentFixture<TestMaskIonComponent>;
  let component: TestMaskIonComponent;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        TestMaskIonComponent,
        SimpleMaskDirective
      ],
      imports: [
        IonicModule.forRoot(),
        ReactiveFormsModule
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestMaskIonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create an instance', () => {
    expect(component).toBeTruthy();
  });

  it('should clear on blur w/ wrong input if clearIfNotMatch is true', () => {
    component.mask = 'aaaa-99';
    component.clearIfNotMatch = true;
    const el = fixture.nativeElement.querySelector('ion-input');
    fixture.detectChanges();
    el.value = 'asdf';
    el.dispatchEvent(new Event('blur'));
    fixture.detectChanges();
    expect(el.value).toBe('');
  });

  it('should check mask', () => {
    component.mask = 'aaaa-99';
    expect(ionInputTest('1324', fixture)).toBe('');
  });

  it('should fit on mask', () => {
    component.mask = '999.999.999-99';
    expect(ionInputTest('12345675018', fixture)).toBe('123.456.750-18');
  });

  it('should add patterns', () => {
    component.mask = '999.999.999-99I';
    component.addPatterns = { 'I': '[A-Z]' };
    expect(ionInputTest('12345675018B', fixture)).toBe('123.456.750-18B');
  });

  it('should set new patterns', () => {
    component.mask = 'III';
    component.newPatterns = { 'I': '[A-Z]' };
    expect(ionInputTest('ASa', fixture)).toBe('AS');
  });

  it('should set form control', () => {
    component.mask = 'aaaa-99';
    ionInputTest('asdf-99', fixture);
    expect('asdf-99').toBe(component.formControl.value);
  });
});

describe('SimpleMaskDirective with native input', () => {
    let fixture: ComponentFixture<TestMaskComponent>;
    let component: TestMaskComponent;
  
    beforeEach(() => {
      TestBed.configureTestingModule({
        declarations: [
          TestMaskComponent,
          SimpleMaskDirective
        ],
        imports: [
          ReactiveFormsModule
        ]
      })
      .compileComponents();
    });
  
    beforeEach(() => {
      fixture = TestBed.createComponent(TestMaskComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
    });
  
    it('should create an instance', () => {
      expect(component).toBeTruthy();
    });
  
    it('should clear on blur w/ wrong input if clearIfNotMatch is true', () => {
      component.mask = 'aaaa-99';
      component.clearIfNotMatch = true;
      const el = fixture.nativeElement.querySelector('input');
      fixture.detectChanges();
      el.value = 'asdf';
      el.dispatchEvent(new Event('blur'));
      fixture.detectChanges();
      expect(el.value).toBe('');
    });
  
    it('should check mask', () => {
      component.mask = 'aaaa-99';
      expect(inputTest('1324', fixture)).toBe('');
    });
  
    it('should fit on mask', () => {
      component.mask = '999.999.999-99';
      expect(inputTest('12345675018', fixture)).toBe('123.456.750-18');
    });
  
    it('should add patterns', () => {
      component.mask = '999.999.999-99I';
      component.addPatterns = { 'I': '[A-Z]' };
      expect(inputTest('12345675018B', fixture)).toBe('123.456.750-18B');
    });
  
    it('should set new patterns', () => {
      component.mask = 'III';
      component.newPatterns = { 'I': '[A-Z]' };
      expect(inputTest('ASa', fixture)).toBe('AS');
    });
  
    it('should set form control', () => {
      component.mask = 'aaaa-99';
      inputTest('asdf-99', fixture);
      expect('asdf-99').toBe(component.formControl.value);
    });
  });
  
