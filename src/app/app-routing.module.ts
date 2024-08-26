import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeProfilesComponent } from './pages/employee-profile/employee-profiles.component';
import { EmployeeDetailComponent } from './pages/employee-detail/employee-detail.component';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { GenerateTokenComponent } from './pages/generate-token/generate-token.component';
import { AuthGuard } from './guards/auth.guard';
// TODO: insert import for the rest of pages

const routes: Routes = [
  { path: 'home', component: EmployeeProfilesComponent },
  { path: 'employee-profiles', component: EmployeeProfilesComponent },
  { path: 'employee-profile/:id', component: EmployeeDetailComponent },
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'token', component: GenerateTokenComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', redirectTo: '/home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

