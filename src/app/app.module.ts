import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { VisaEffects } from './store/visa.effects';
import { visaReducer } from './store/visa.reducer';

import { AppComponent } from './app.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { EmployeeProfilesComponent } from './pages/employee-profile/employee-profiles.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EmployeeDetailComponent } from './pages/employee-detail/employee-detail.component';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { JwtInterceptor } from './interceptors/jwt.interceptor';
import { AuthGuard } from './guards/auth.guard';
import { GenerateTokenComponent } from './pages/generate-token/generate-token.component';

import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatChipsModule } from '@angular/material/chips';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatTableModule } from '@angular/material/table';


@NgModule({
  declarations: [
    AppComponent,
    EmployeeProfilesComponent,
    EmployeeDetailComponent,
    LoginComponent,
    HomeComponent,
    GenerateTokenComponent
  ],
  imports: [
    // Angular 
    BrowserModule,
    RouterModule,
    FormsModule,
    NavigationComponent,
    HttpClientModule,  
    AppRoutingModule, 
    EffectsModule.forRoot([VisaEffects]),
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    BrowserAnimationsModule,
    MatChipsModule,
    MatProgressSpinnerModule,
    MatTableModule,


    // NgRx
    StoreModule.forRoot({ visa: visaReducer }), 
    EffectsModule.forRoot([VisaEffects]), 
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() }), BrowserAnimationsModule,
    
  ],
  providers: [
    AuthGuard,
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

