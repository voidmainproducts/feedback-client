import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import {FormsModule} from "@angular/forms";
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import {HttpClientModule} from "@angular/common/http";
import { FeedbackComponent } from './feedback/feedback.component';
import {DashboardComponent} from "./dashboard/dashboard.component";

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PageNotFoundComponent,
    FeedbackComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
