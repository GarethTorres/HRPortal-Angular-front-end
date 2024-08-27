import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { DomSanitizer } from '@angular/platform-browser';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ApplicationService } from '../../services/application.service';
import { OnboardingApplicationDetails } from '../../models/application.model';
import { ApprovalConfirmationDialogComponent } from '../../components/approval-confirmation-dialog/approval-confirmation-dialog.component';
import { RejectionConfirmationDialogComponent } from '../../components/rejection-confirmation-dialog/rejection-confirmation-dialog.component';
import { DocumentPreviewDialogComponent } from '../../components/document-preview-dialog/document-preview-dialog.component';

@Component({
  selector: 'view-application',
  templateUrl: './view-application.component.html',
  styleUrls: ['./view-application.component.css'],
})
export class ViewApplicationComponent implements OnInit {
  applicationDetails: OnboardingApplicationDetails = {
    firstName: '',
    lastName: '',
    middleName: '',
    preferredName: '',
    profilePicture: '',
    currentAddress: {
      buildingNumber: '',
      streetName: '',
      apartmentNumber: '',
      city: '',
      state: '',
      zipCode: '',
    },
    cellPhone: '',
    workPhone: '',
    carInfo: {
      make: '',
      model: '',
      color: '',
    },
    ssn: '',
    dateOfBirth: null,
    gender: '',
    workAuthorization: {
      isCitizenOrPermanentResident: false,
      citizenshipStatus: '',
      visaType: '',
      visaTitle: '',
      visaStartDate: null,
      visaEndDate: null,
    },
    driverLicense: {
      hasDriverLicense: false,
      licenseNumber: '',
      expirationDate: null,
    },
    reference:
      {
        firstName: '',
        lastName: '',
        middleName: '',
        phone: '',
        email: '',
        relationship: '',
      } || undefined,
    emergencyContacts: [
      {
        firstName: '',
        lastName: '',
        middleName: '',
        phone: '',
        email: '',
        relationship: '',
      },
    ],
    feedback: '',
    onboardingStatus: '',
    submittedDate: null,
    uploadedDocuments: [],
    email: '',
  };

  feedback: string = '';
  showFeedbackForm: boolean = false;

  genderOptions = ['Male', 'Female', 'Prefer not to say'];
  citizenshipStatusOptions = ['Citizen', 'Green Card'];
  visaOptions = ['H1-B', 'L2', 'F1 (CPT/OPT)', 'H4', 'Other'];

  constructor(
    private route: ActivatedRoute,
    private applicationService: ApplicationService,
    private dialog: MatDialog,
    private sanitizer: DomSanitizer,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.fetchApplicationDetails();
  }

  showMessage(message: string) {
    this.snackBar.open(message, '', {
      duration: 3000,
      horizontalPosition: 'right',
      verticalPosition: 'bottom',
    });
  }

  fetchApplicationDetails(): void {
    const applicationId = this.route.snapshot.paramMap.get('applicationId');
    if (applicationId) {
      this.applicationService.getApplicationDetails(applicationId).subscribe(
        (data: OnboardingApplicationDetails) => {
          this.applicationDetails = data;
        },
        (error: any) => {
          // console.error('Error fetching application details', error);
          const errorMessage =
            error?.error?.message || 'Error fetching application details';
          this.showMessage(errorMessage);
        }
      );
    }
  }

  approveApplication(): void {
    const applicationId = this.route.snapshot.paramMap.get('applicationId');
    if (applicationId) {
      this.applicationService.approveApplication(applicationId).subscribe(
        (message: string) => {
          // Display message (toast notification) and fetch the latest application details
          // console.log(message);
          this.showMessage(message);
          this.fetchApplicationDetails();
        },
        (error: any) => {
          // console.error('Error approving application', error);
          const errorMessage =
            error?.error?.message || 'Error approving application';
          this.showMessage(errorMessage);
        }
      );
    }
  }

  rejectApplication(): void {
    const applicationId = this.route.snapshot.paramMap.get('applicationId');
    if (applicationId) {
      this.applicationService
        .rejectApplication(applicationId, this.feedback)
        .subscribe(
          (message: string) => {
            // Display message (toast notification) and fetch the latest application details
            this.feedback = '';
            // console.log(message);
            this.showMessage(message);
            this.fetchApplicationDetails();
          },
          (error: any) => {
            // console.error('Error rejecting application', error);
            const errorMessage =
              error?.error?.message || 'Error rejecting application';
            this.showMessage(errorMessage);
          }
        );
    }
  }
  confirmApprove(): void {
    const dialogRef = this.dialog.open(ApprovalConfirmationDialogComponent);

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.approveApplication();
      }
    });
  }

  confirmReject(): void {
    const dialogRef = this.dialog.open(RejectionConfirmationDialogComponent);

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.showFeedbackForm = false;
        this.rejectApplication();
      }
    });
  }

  previewDocument(url: string): void {
    const safeUrl = this.sanitizer.bypassSecurityTrustResourceUrl(url);
    this.dialog.open(DocumentPreviewDialogComponent, {
      width: '80%',
      data: { url: safeUrl },
    });
  }

  cancelRejection(): void {
    this.showFeedbackForm = false;
    this.feedback = '';
  }
}
