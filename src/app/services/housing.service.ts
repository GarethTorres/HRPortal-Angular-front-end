import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Housing, FacilityReport } from '../models/housing.model';

@Injectable({
  providedIn: 'root'
})
export class HousingService {
  private apiUrl = 'http://localhost:5000/api'; 

  constructor(private http: HttpClient) {}

  getHouses(): Observable<Housing[]> {
    return this.http.get<Housing[]>(this.apiUrl);
  }

  getHouseDetails(id: string): Observable<Housing> {
    return this.http.get<Housing>(`${this.apiUrl}/${id}`);
  }

  addHouse(house: Partial<Housing>): Observable<Housing> {
    return this.http.post<Housing>(this.apiUrl, house);
  }

  deleteHouse(id: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }

  addComment(houseId: string, reportId: string, comment: { description: string }): Observable<FacilityReport> {
    return this.http.post<FacilityReport>(`${this.apiUrl}/${houseId}/reports/${reportId}/comments`, comment);
  }
}


