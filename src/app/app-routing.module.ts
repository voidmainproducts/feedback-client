import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./components/login/login.component";
import {PageNotFoundComponent} from "./components/page-not-found/page-not-found.component";
import {DashboardComponent} from "./components/dashboard/dashboard.component";
import {FeedbackComponent} from "./components/feedback/feedback.component";
import {RegisterComponent} from "./components/register/register.component";
import {AuthGuard} from "./guards/auth.guard";

const routes: Routes = [
  {path:"login", component: LoginComponent},
  { path: '', redirectTo : 'login', pathMatch:'full' },
  {path:"dashboard", component: DashboardComponent, canActivate: [AuthGuard]},
  {path:"feedback", component: FeedbackComponent, canActivate: [AuthGuard]},
  {path:"register", component: RegisterComponent},
  {
    path:"admin",
    loadChildren: () => import('./administration/administration.module').then(m => m.AdministrationModule),
    canActivate: [AuthGuard]
  },

  { path: '**', component:PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
