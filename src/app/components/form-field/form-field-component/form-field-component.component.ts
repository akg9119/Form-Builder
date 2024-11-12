import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';


@Component({
  selector: 'app-form-field-component',
  templateUrl: './form-field-component.component.html',
  styleUrls: ['./form-field-component.component.scss']
})
export class FormFieldComponentComponent {
  @Input() control!: FormControl;
  @Input() type: string = 'text';
  @Input() placeholder: string = '';
}
