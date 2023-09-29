import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./login/login.component";
import {PageNotFoundComponent} from "./page-not-found/page-not-found.component";
import {DashboardComponent} from "./dashboard/dashboard.component";
import {FeedbackComponent} from "./feedback/feedback.component";

const routes: Routes = [
  {path:"login", component: LoginComponent},
  { path: '', redirectTo : 'login', pathMatch:'full' },
  {path:"dashboard", component: DashboardComponent},
  {path:"feedback", component: FeedbackComponent},
  {
    path:"admin",
    loadChildren: () => import('./administration/administration.module').then(m => m.AdministrationModule)
  },

  { path: '**', component:PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
