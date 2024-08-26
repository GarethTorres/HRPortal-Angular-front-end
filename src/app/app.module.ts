import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
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

@NgModule({
  declarations: [
    AppComponent,
    EmployeeProfilesComponent,
    EmployeeDetailComponent   
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


    // NgRx
    StoreModule.forRoot({ visa: visaReducer }), 
    EffectsModule.forRoot([VisaEffects]), 
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() }), BrowserAnimationsModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

