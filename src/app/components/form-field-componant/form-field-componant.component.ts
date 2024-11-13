import { Component, Input , OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form-field-componant',
  templateUrl: './form-field-componant.component.html',
  styleUrls: ['./form-field-componant.component.scss']
})
export class FormFieldComponantComponent implements OnInit {
  @Input() field: any;
  @Input() form!: FormGroup;
  ngOnInit(): void {}
  get isValid() {
    return this.form.controls[this.field.name].valid;
  }
}
