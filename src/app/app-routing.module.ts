import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './landing/home/home.component';
import { PlansComponent } from './landing/plans/plans.component';
import { NotfoundComponent } from './landing/notfound/notfound.component';
import { LoginComponent } from './accounts/login/login.component';
import { SigninComponent } from './accounts/signin/signin.component';

const routes: Routes = [
  {path:"",component:HomeComponent},
  {path:"Planes",component:PlansComponent},
  {path:"Accounts/LogIn",component:LoginComponent},
  {path:"Accounts/SignIn",component:SigninComponent},
  
  //wildcard route
  // {path: '**', redirectTo: ''}
  {path:'**' , component:NotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
