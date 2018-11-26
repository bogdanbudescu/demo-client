import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { MaterialModule } from './material/material.module';
import { AppRoutingModule } from './router/app.routing.module';

import { AppComponent } from './app.component';
import { MenuComponent } from './pages/menu/menu.component';
import { EmployeeComponent } from './pages/employee/employee.component';
import { SignInComponent } from './pages/sign-in/sign-in.component';
import { SignUpComponent } from './pages/sign-up/sign-up.component';
import { HttpService } from './services/http/http.service';
import { SharedService } from './services/shared/shared.service';
import { CryptoService } from './services/crypto/crypto.service';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    EmployeeComponent,
    SignInComponent,
    SignUpComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MaterialModule
  ],
  providers: [
    HttpService,
    SharedService,
    CryptoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
