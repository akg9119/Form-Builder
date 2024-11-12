import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormFieldComponentComponent } from './form-field-component.component';

describe('FormFieldComponentComponent', () => {
  let component: FormFieldComponentComponent;
  let fixture: ComponentFixture<FormFieldComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormFieldComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormFieldComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
