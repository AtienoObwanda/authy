import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { SignupUpPageComponent } from './components/signup-up-page/signup-up-page.component';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';


const routes: Routes = [
  // {path:"", redirectTo:"login", pathMatch:"full"},
  {path:"", component:LoginPageComponent},
  {path:"login", component:LoginPageComponent},
  {path:"signUp", component:SignupUpPageComponent},
  {path:"dashboard", component:DashboardComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
