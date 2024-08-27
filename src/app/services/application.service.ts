import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

import {
  OnboardingApplicationSummary,
  OnboardingApplicationDetails,
} from '../models/application.model';

@Injectable({
  providedIn: 'root',
})
export class ApplicationService {
  private baseApiUrl = 'http://localhost:5000/api/hr/applications';

  constructor(private http: HttpClient) {}

  // Fetch application summaries (for onboarding application review component)
  getApplicationSummaries(): Observable<OnboardingApplicationSummary[]> {
    return this.http.get<OnboardingApplicationSummary[]>(this.baseApiUrl,
      { withCredentials: true }
    );
  }

  // Fetch application details by ID (for viewing the details of an application in the view application component)
  getApplicationDetails(
    applicationId: string
  ): Observable<OnboardingApplicationDetails> {
    return this.http.get<OnboardingApplicationDetails>(
      `${this.baseApiUrl}/${applicationId}`,
      { withCredentials: true }
    );
  }

  // Approve application by ID (for approving an application in the view application component)
  approveApplication(applicationId: string): Observable<string> {
    return this.http
      .patch<{ message: string }>(
        `${this.baseApiUrl}/${applicationId}/approve`,
        {},
        { withCredentials: true }
      )
      .pipe(map((response) => response.message));
  }

  // Reject application by ID with feedback (for rejecting an application in the view application component)
  rejectApplication(
    applicationId: string,
    feedback: string
  ): Observable<string> {
    return this.http
      .patch<{ message: string }>(
        `${this.baseApiUrl}/${applicationId}/reject`,
        {
          feedback,
        },
        { withCredentials: true }
      )
      .pipe(map((response) => response.message));
  }

  // private getHeaders() {
  //   const token = localStorage.getItem('authToken'); // Retrieve token from local storage
  //   return {
  //     Authorization: `Bearer ${token}` // Send as Bearer token
  //   };
  // }

  // // Mocked method for fetching application summaries
  // getApplicationSummaries(): Observable<OnboardingApplicationSummary[]> {
  //   return of([
  //     {
  //       firstName: 'John',
  //       lastName: 'Doe',
  //       email: 'john.doe@example.com',
  //       onboardingStatus: 'Pending',
  //       applicationId: '1',
  //     },
  //     {
  //       firstName: 'Jane',
  //       lastName: 'Smith',
  //       email: 'jane.smith@example.com',
  //       onboardingStatus: 'Approved',
  //       applicationId: '2',
  //     },
  //     {
  //       firstName: 'Alice',
  //       lastName: 'Johnson',
  //       email: 'alice.johnson@example.com',
  //       onboardingStatus: 'Rejected',
  //       applicationId: '3',
  //     },
  //     {
  //       firstName: 'Bob',
  //       lastName: 'Brown',
  //       email: 'bob.brown@example.com',
  //       onboardingStatus: 'Pending',
  //       applicationId: '4',
  //     },
  //     {
  //       firstName: 'Charlie',
  //       lastName: 'Davis',
  //       email: 'charlie.davis@example.com',
  //       onboardingStatus: 'Pending',
  //       applicationId: '5',
  //     },
  //     {
  //       firstName: 'Charlie',
  //       lastName: 'Davis',
  //       email: 'charlie.davis@example.com',
  //       onboardingStatus: 'Pending',
  //       applicationId: '5',
  //     },
  //     {
  //       firstName: 'Charlie',
  //       lastName: 'Davis',
  //       email: 'charlie.davis@example.com',
  //       onboardingStatus: 'Pending',
  //       applicationId: '5',
  //     },
  //     {
  //       firstName: 'Charlie',
  //       lastName: 'Davis',
  //       email: 'charlie.davis@example.com',
  //       onboardingStatus: 'Pending',
  //       applicationId: '5',
  //     },
  //     {
  //       firstName: 'Charlie',
  //       lastName: 'Davis',
  //       email: 'charlie.davis@example.com',
  //       onboardingStatus: 'Pending',
  //       applicationId: '5',
  //     },
  //     {
  //       firstName: 'Charlie',
  //       lastName: 'Davis',
  //       email: 'charlie.davis@example.com',
  //       onboardingStatus: 'Pending',
  //       applicationId: '5',
  //     },
  //     {
  //       firstName: 'Charlie',
  //       lastName: 'Davis',
  //       email: 'charlie.davis@example.com',
  //       onboardingStatus: 'Pending',
  //       applicationId: '5',
  //     },
  //   ]);
  // }

  // // Mocked method for fetching application details by ID
  // getApplicationDetails(
  //   applicationId: string
  // ): Observable<OnboardingApplicationDetails> {
  //   return of({
  //     firstName: 'John',
  //     lastName: 'Doe',
  //     middleName: 'A',
  //     preferredName: 'Johnny',
  //     profilePicture:
  //       'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Default_pfp.svg/2048px-Default_pfp.svg.png',
  //     currentAddress: {
  //       buildingNumber: '123',
  //       streetName: 'Main St',
  //       apartmentNumber: '4B',
  //       city: 'Metropolis',
  //       state: 'NY',
  //       zipCode: '10001',
  //     },
  //     cellPhone: '123-456-7890',
  //     workPhone: '098-765-4321',
  //     carInfo: {
  //       make: 'Toyota',
  //       model: 'Corolla',
  //       color: 'Blue',
  //     },
  //     ssn: '123-45-6789',
  //     dateOfBirth: new Date('1990-01-01'),
  //     gender: 'Male',
  //     workAuthorization: {
  //       isCitizenOrPermanentResident: false,
  //       citizenshipStatus: 'None',
  //       visaType: 'Other',
  //       visaTitle: 'Work Visa',
  //       visaStartDate: new Date('2023-01-01'),
  //       visaEndDate: new Date('2025-01-01'),
  //     },
  //     driverLicense: {
  //       hasDriverLicense: true,
  //       licenseNumber: 'D1234567',
  //       expirationDate: new Date('2025-01-01'),
  //     },
  //     reference: {
  //       firstName: 'Jane',
  //       lastName: 'Smith',
  //       middleName: 'B',
  //       phone: '234-567-8901',
  //       email: 'jane.smith@example.com',
  //       relationship: 'Colleague',
  //     },
  //     emergencyContacts: [
  //       {
  //         firstName: 'Emily',
  //         lastName: 'Doe',
  //         middleName: '',
  //         phone: '345-678-9012',
  //         email: 'emily.doe@example.com',
  //         relationship: 'Spouse',
  //       },
  //       {
  //         firstName: 'Emily',
  //         lastName: 'Doe',
  //         middleName: '',
  //         phone: '345-678-9012',
  //         email: 'emily.doe@example.com',
  //         relationship: 'Spouse',
  //       },
  //       {
  //         firstName: 'Emily',
  //         lastName: 'Doe',
  //         middleName: '',
  //         phone: '345-678-9012',
  //         email: 'emily.doe@example.com',
  //         relationship: 'Spouse',
  //       },
  //     ],
  //     feedback: '',
  //     onboardingStatus: 'Pending',
  //     submittedDate: new Date('2023-08-01'),
  //     uploadedDocuments: [
  //       {
  //         id: 'doc1',
  //         type: 'Passport',
  //         name: 'Passport.pdf',
  //         url: 'https://www.example.com/sample.pdf',
  //         uploadDate: '2023-08-01T10:00:00Z',
  //       },
  //     ],
  //     email: 'john.doe@example.com',
  //   });
  // }

  // // Mocked method for approving an application
  // approveApplication(applicationId: string): Observable<string> {
  //   return of('Application approved successfully');
  // }

  // // Mocked method for rejecting an application
  // rejectApplication(
  //   applicationId: string,
  //   feedback: string
  // ): Observable<string> {
  //   return of('Application rejected successfully');
  // }
}
