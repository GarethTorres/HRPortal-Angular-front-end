import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeProfilesComponent } from './employee-profiles.component';

const routes: Routes = [
  { path: 'employee-profiles', component: EmployeeProfilesComponent },
  { path: '', redirectTo: '/employee-profiles', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

