import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ApplicationService } from '../../services/application.service';
import {
  OnboardingApplicationSummary,
  OnboardingStatusEnum,
} from '../../models/application.model';

@Component({
  selector: 'onboarding-application-review',
  templateUrl: './onboarding-application-review.component.html',
  styleUrls: ['./onboarding-application-review.component.css'],
})
export class OnboardingApplicationReviewComponent implements OnInit {
  applicationSummaries: OnboardingApplicationSummary[] = [];
  filteredApplicationSummaries: OnboardingApplicationSummary[] = [];
  selectedStatus: OnboardingStatusEnum = OnboardingStatusEnum.PENDING;
  displayedColumns: string[] = ['name', 'email', 'action'];

  constructor(
    private applicationService: ApplicationService,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.fetchApplicationSummaries();
  }

  showMessage(message: string) {
    this.snackBar.open(message, '', {
      duration: 3000,
      horizontalPosition: 'right',
      verticalPosition: 'bottom',
    });
  }

  fetchApplicationSummaries(): void {
    this.applicationService.getApplicationSummaries().subscribe(
      (data: OnboardingApplicationSummary[]) => {
        this.applicationSummaries = data;
        this.filterApplicationSummaries();
      },
      (error: any) => {
        // console.error('Error fetching application summaries:', error);
        const errorMessage =
          error?.error?.message || 'Error fetching application summaries';
        this.showMessage(errorMessage);
      }
    );
  }

  filterApplicationSummaries(): void {
    this.filteredApplicationSummaries = this.applicationSummaries.filter(
      (app) => app.onboardingStatus === this.selectedStatus
    );
  }

  viewApplication(applicationId: string): void {
    window.open(`/applications/${applicationId}`, '_blank');
  }

  getStatusOptions(): string[] {
    return Object.values(OnboardingStatusEnum);
  }
}
