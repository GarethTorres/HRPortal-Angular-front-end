import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { EmployeeVisaStatus } from '../models/employee-visa-status';

@Injectable({
  providedIn: 'root'
})
export class VisaStatusService {
  private apiUrl = 'http://localhost:5000/api/visa-status'; 

  constructor(private http: HttpClient) { }

  getInProgressVisaStatuses(): Observable<EmployeeVisaStatus[]> {
    return this.http.get<EmployeeVisaStatus[]>(`${this.apiUrl}/in-progress`);
  }

  getAllVisaStatuses(): Observable<EmployeeVisaStatus[]> {
    return this.http.get<EmployeeVisaStatus[]>(`${this.apiUrl}/all`);
  }

  approveDocument(employeeId: string, documentType: string): Observable<EmployeeVisaStatus> {
    return this.http.post<EmployeeVisaStatus>(`${this.apiUrl}/${employeeId}/approve`, { documentType });
  }

  rejectDocument(employeeId: string, documentType: string, feedback: string): Observable<EmployeeVisaStatus> {
    return this.http.post<EmployeeVisaStatus>(`${this.apiUrl}/${employeeId}/reject`, { documentType, feedback });
  }

  sendNotification(employeeId: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/${employeeId}/notify`, {});
  }
}


