import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeProfilesComponent } from './pages/employee-profile/employee-profiles.component';
import { EmployeeDetailComponent } from './pages/employee-detail/employee-detail.component';
// TODO: insert import for the rest of pages

const routes: Routes = [
  { path: 'home', component: EmployeeProfilesComponent },
  { path: 'employee-profiles', component: EmployeeProfilesComponent },
  { path: 'employee-profile/:id', component: EmployeeDetailComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', redirectTo: '/home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

