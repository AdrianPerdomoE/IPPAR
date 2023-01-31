import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { Error404Component } from './error404/error404.component';
import { RegisterComponent } from './register/register.component';

@NgModule({
  declarations: [	
    AppComponent,
    LoginComponent,
    Error404Component,
    RegisterComponent,
   ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
