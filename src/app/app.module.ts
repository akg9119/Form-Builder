import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { FormBuilderComponentComponent } from './components/form-builder/form-builder-component/form-builder-component.component';
import { FormFieldComponentComponent } from './components/form-field/form-field-component/form-field-component.component';

@NgModule({
  declarations: [
    AppComponent,
    FormBuilderComponentComponent,
    FormFieldComponentComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
