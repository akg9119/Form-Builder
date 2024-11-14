import { Component , OnInit} from '@angular/core';
import { FormBuilder, FormGroup, Validators, ValidatorFn } from '@angular/forms';
import { FormBuilderService } from '../../services/form-builder-service.service';
interface FormField {
  type: string;
  name: string;
  label: string;
  placeholder: string;
  options?: string[];
  validations: ValidatorFn[]; 
}
@Component({
  selector: 'app-form-builder-componant',
  templateUrl: './form-builder-componant.component.html',
  styleUrls: ['./form-builder-componant.component.scss']
})
export class FormBuilderComponantComponent implements OnInit {
  form: FormGroup;
  fields: FormField[] = [];
  fieldType: string = 'text';
  fieldLabel: string = '';
  fieldPlaceholder: string = '';
  fieldOptions: string = ''; 
  required: boolean = false;
  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({});
  }
  ngOnInit(): void {}
  addField() {
    const name = `field${this.fields.length + 1}`;
    const optionsArray = this.fieldOptions.split(',').map(option => option.trim());
  
    let newField: FormField = {
      type: this.fieldType,
      name,
      label: this.fieldLabel,
      placeholder: this.fieldPlaceholder,
      options: optionsArray.length > 0 ? optionsArray : undefined,
      validations: []
    };
  
    if (this.required) {
      newField.validations.push(Validators.required);
    }
  
    this.fields.push(newField);
  
    if (this.fieldType === 'checkbox') {
      optionsArray.forEach(option => {
        this.form.addControl(`${name}_${option}`, this.fb.control(false));
      });
    } else {
      this.form.addControl(name, this.fb.control('', newField.validations));
    }
  
    this.resetCustomization();
    this.onFieldTypeChange();
  }
  

  onFieldTypeChange() {
    this.fieldLabel = '';
    this.fieldPlaceholder = '';
    this.fieldOptions = ''; 
  }
  resetCustomization() {
    this.fieldType = 'text';
    this.fieldLabel = 'Enter Label';
    this.fieldPlaceholder = 'Enter Placeholder';
    this.fieldOptions = '';
    this.required = false;
  }
  removeField(index: number) {
    const fieldName = this.fields[index].name;
    this.fields.splice(index, 1);
    this.form.removeControl(fieldName);
  }
  submitForm() {
    if (this.form.valid) {
      const formData = { ...this.form.value };
  
      this.fields.forEach(field => {
        if (field.type === 'checkbox' && field.options) {
          formData[field.name] = field.options
            .filter(option => formData[`${field.name}_${option}`])
            .map(option => option);
  
          field.options.forEach(option => {
            delete formData[`${field.name}_${option}`];
          });
        }
      });
  
      console.log(formData);
      alert('Form submitted successfully!');
      this.form.reset();
    }
  }
  
}
