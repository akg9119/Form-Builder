import { Component, Input , OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
@Component({
  selector: 'app-form-field-component',
  templateUrl: './form-field-component.component.html',
  styleUrls: ['./form-field-component.component.scss']
})
export class FormFieldComponentComponent implements OnInit {
  @Input() field: any;
  @Input() form!: FormGroup;
  ngOnInit(): void {}
  get isValid() {
    return this.form.controls[this.field.name].valid;
  }
}
