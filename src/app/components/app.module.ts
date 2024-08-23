import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { EffectsModule } from '@ngrx/effects';
import { VisaEffects } from './store/visa.effects';

import { AppComponent } from './app.component';
import { EmployeeProfilesComponent } from './employee-profiles.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeProfilesComponent   
  ],
  imports: [
    // Angular 
    BrowserModule,
    FormsModule,
    HttpClientModule,  
    AppRoutingModule 
    EffectsModule.forRoot([VisaEffects]),


    // NgRx
    StoreModule.forRoot({ todo: todoReducer, user: userReducer }), // Register your reducers, the key represents the name of the slice of state in the store (used when creating feature selectors)
    EffectsModule.forRoot([TodoEffects]), // Register your effects
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() }), // enabling NgRx devtools, which you can then use the Redux devtools in your browser to check the states and actions
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

