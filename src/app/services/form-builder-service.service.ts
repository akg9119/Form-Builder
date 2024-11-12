import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FormBuilderService {
  private apiUrl = 'http://localhost:3000/formFields';

  constructor(private http: HttpClient) {}

  getFormFields(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }
  saveFormFields(formData: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, formData);
  }
  
}
