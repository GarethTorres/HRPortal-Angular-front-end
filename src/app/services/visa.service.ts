import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { EmployeeVisaStatus } from '../models/visa-status.model';

@Injectable({
  providedIn: 'root'
})
export class VisaService {
  private apiUrl = 'http://localhost:5000/api/visa';

  constructor(private http: HttpClient) {}

  getVisaStatus(): Observable<EmployeeVisaStatus> {
    return this.http.get<EmployeeVisaStatus>(`${this.apiUrl}/status`);
  }

  uploadDocument(documentType: string, file: File): Observable<EmployeeVisaStatus> {
    const formData = new FormData();
    formData.append('file', file);
    return this.http.post<EmployeeVisaStatus>(`${this.apiUrl}/upload/${documentType}`, formData);
  }

  downloadTemplate(templateType: string): Observable<Blob> {
    return this.http.get(`${this.apiUrl}/template/${templateType}`, { responseType: 'blob' });
  }
}

