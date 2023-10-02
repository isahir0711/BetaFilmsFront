import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './landing/home/home.component';
import { PlansComponent } from './landing/plans/plans.component';
import { NotfoundComponent } from './landing/notfound/notfound.component';
import { LoginComponent } from './accounts/login/login.component';
import { SigninComponent } from './accounts/signin/signin.component';
import { PaymentComponent } from './payments/payment/payment.component';
import { PayplanComponent } from './landing/plans/payplan/payplan.component';
import { SuccessComponent } from './payments/success/success.component';
import { authGuard } from './services/guards/auth.guard';

const routes: Routes = [
  {path:"",component:HomeComponent},
  {path:"Planes",component:PlansComponent},
  {path:"Accounts/LogIn",component:LoginComponent},
  {path:"Accounts/SignIn",component:SigninComponent},
  {path:"Payments/Pay/:id",component:PayplanComponent,canActivate:[authGuard]},
  
  {path:"Payments/Success",component:SuccessComponent,canActivate:[authGuard]},
  
  
  //wildcard route
  // {path: '**', redirectTo: ''}
  {path:'**' , component:NotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
