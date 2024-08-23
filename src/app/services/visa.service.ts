import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { VisaStatus } from '../models/visa-status.model';

@Injectable({
  providedIn: 'root'
})
export class VisaService {
  private apiUrl = 'api/visa';
// Replace our API URL here

  constructor(private http: HttpClient) {}

  getVisaStatus(): Observable<VisaStatus> {
    return this.http.get<VisaStatus>(`${this.apiUrl}/status`);
  }

  uploadDocument(documentType: string, file: File): Observable<VisaStatus> {
    const formData = new FormData();
    formData.append('file', file);
    return this.http.post<VisaStatus>(`${this.apiUrl}/upload/${documentType}`, formData);
  }

  downloadTemplate(templateType: string): Observable<Blob> {
    return this.http.get(`${this.apiUrl}/template/${templateType}`, { responseType: 'blob' });
  }
}

