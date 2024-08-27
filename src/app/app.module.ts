import { NgModule, isDevMode } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { VisaEffects } from './store/visa.effects';
import { visaReducer } from './store/visa.reducer';

import { MatExpansionModule } from '@angular/material/expansion';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatDividerModule } from '@angular/material/divider';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatSnackBarModule } from '@angular/material/snack-bar';

import { AppComponent } from './app.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { DocumentPreviewDialogComponent } from './components/document-preview-dialog/document-preview-dialog.component';
import { ApprovalConfirmationDialogComponent } from './components/approval-confirmation-dialog/approval-confirmation-dialog.component';
import { RejectionConfirmationDialogComponent } from './components/rejection-confirmation-dialog/rejection-confirmation-dialog.component';
import { EmployeeProfilesComponent } from './pages/employee-profile/employee-profiles.component';
import { EmployeeDetailComponent } from './pages/employee-detail/employee-detail.component';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { JwtInterceptor } from './interceptors/jwt.interceptor';
import { AuthGuard } from './guards/auth.guard';
import { GenerateTokenComponent } from './pages/generate-token/generate-token.component';

import { MatIconModule } from '@angular/material/icon';
import { MatChipsModule } from '@angular/material/chips';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

import { OnboardingApplicationReviewComponent } from './pages/onboarding-application-review/onboarding-application-review.component';
import { ViewApplicationComponent } from './pages/view-application/view-application.component';

import { HousingManagementComponent } from './pages/housing-management/housing-management.component';
import { AddHouseDialogComponent } from './pages/housing-management/add-house-dialog.component';
import { HiringManagementComponent } from './pages/hiring-management/hiring-management.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeProfilesComponent,
    EmployeeDetailComponent,
    LoginComponent,
    HomeComponent,
    GenerateTokenComponent,
    EmployeeDetailComponent,
    OnboardingApplicationReviewComponent,
    ViewApplicationComponent,
    DocumentPreviewDialogComponent,
    ApprovalConfirmationDialogComponent,
    RejectionConfirmationDialogComponent,
    HousingManagementComponent,
    AddHouseDialogComponent,
    HiringManagementComponent
  ],
  imports: [
    // Angular
    BrowserModule,
    CommonModule,
    RouterModule,
    FormsModule,
    NavigationComponent,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    EffectsModule.forRoot([VisaEffects]),
    BrowserAnimationsModule,
    MatExpansionModule,
    MatListModule,
    MatIconModule,
    MatChipsModule,
    MatProgressSpinnerModule,
    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatRadioModule,
    MatSelectModule,
    MatDividerModule,
    MatCardModule,
    MatTableModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSnackBarModule,

    // NgRx
    StoreModule.forRoot({ visa: visaReducer }),
    EffectsModule.forRoot([VisaEffects]),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() }),
  ],
  providers: [
    AuthGuard,
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
