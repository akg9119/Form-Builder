import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormFieldComponantComponent } from './form-field-componant.component';

describe('FormFieldComponantComponent', () => {
  let component: FormFieldComponantComponent;
  let fixture: ComponentFixture<FormFieldComponantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormFieldComponantComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormFieldComponantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
