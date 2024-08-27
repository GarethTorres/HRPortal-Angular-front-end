import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeProfilesComponent } from './pages/employee-profile/employee-profiles.component';
import { EmployeeDetailComponent } from './pages/employee-detail/employee-detail.component';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { GenerateTokenComponent } from './pages/generate-token/generate-token.component';
import { AuthGuard } from './guards/auth.guard';
import { HousingManagementComponent } from './pages/housing-management/housing-management.component';
import { HiringManagementComponent } from './pages/hiring-management/hiring-management.component';

// TODO: insert import for the rest of pages
import { OnboardingApplicationReviewComponent } from './pages/onboarding-application-review/onboarding-application-review.component';
import { ViewApplicationComponent } from './pages/view-application/view-application.component';

const routes: Routes = [
  { path: 'employee-profiles', component: EmployeeProfilesComponent },
  { path: 'employee-profile/:id', component: EmployeeDetailComponent },
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'token', component: GenerateTokenComponent },
  // Temporary routes for testing
  { path: 'onboarding-application', component: OnboardingApplicationReviewComponent },
  { path: 'applications/:applicationId', component: ViewApplicationComponent },
  { path: 'hiring-management', component: HiringManagementComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: '**', redirectTo: '/home' },
  { path: 'housing-management', component: HousingManagementComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

