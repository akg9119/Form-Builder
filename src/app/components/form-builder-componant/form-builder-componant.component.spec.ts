import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormBuilderComponantComponent } from './form-builder-componant.component';

describe('FormBuilderComponantComponent', () => {
  let component: FormBuilderComponantComponent;
  let fixture: ComponentFixture<FormBuilderComponantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormBuilderComponantComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormBuilderComponantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
