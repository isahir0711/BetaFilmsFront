import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './landing/home/home.component';
import { PlansComponent } from './landing/plans/plans.component';
import { NotfoundComponent } from './landing/notfound/notfound.component';
import { LoginComponent } from './accounts/login/login.component';
import { SigninComponent } from './accounts/signin/signin.component';
import { PayplanComponent } from './landing/plans/payplan/payplan.component';
import { SuccessComponent } from './payments/success/success.component';
import { authGuard } from './services/guards/auth.guard';
import { ProductslistComponent } from './admin/dashboard/products/productslist/productslist.component';
import { adminGuard } from './services/guards/admin.guard';
import { DashboardComponent } from './admin/dashboard/dashboard/dashboard.component';
import { ProductsformComponent } from './admin/dashboard/products/productsform/productsform.component';
import { BookingsComponent } from './bookings/bookings.component';
import { AdminbookingsComponent } from './admin/dashboard/adminbookings/adminbookings.component';
import { RecoverpassComponent } from './accounts/recoverpass/recoverpass.component';
import { RecoverpasscodeComponent } from './accounts/recoverpasscode/recoverpasscode.component';
import { ChangepassComponent } from './accounts/changepass/changepass.component';
import { EmailconfirmedComponent } from './accounts/emailconfirmed/emailconfirmed.component';

const routes: Routes = [
  {path:"",title:'betaFilms',component:HomeComponent},
  {path:"Planes",title:'Planes',component:PlansComponent},

  {path:"Accounts/LogIn",title:'Log In',component:LoginComponent},
  {path:"Accounts/SignIn",title:'Sign In',component:SigninComponent},
  {path:"Accounts/ForgotPassword/ChangePass/:token/:email",title:'Change Password',component:ChangepassComponent},
  {path:"Accounts/ForgotPassword",title:'Forgot Password',component:RecoverpassComponent},
  {path:"Accounts/EmailConfirmed/:token/:email",title:'Forgot Password',component:EmailconfirmedComponent},
  // {path:"Accounts/ForgotPassword/Code",title:'Forgot Password',component:RecoverpasscodeComponent},

  {path:"Payments/Pay/:id",title:'Checkout',component:PayplanComponent,canActivate:[authGuard]},
  {path:"Payments/Success",title:'Exitoso',component:SuccessComponent,canActivate:[authGuard]},
  
  {path:"Bookings",component:BookingsComponent,canActivate:[authGuard]},

  {path:"Dashboard/Products",component:ProductslistComponent,canActivate:[adminGuard]},
  {path:"Dashboard/Products/Create",component:ProductsformComponent,canActivate:[adminGuard]},
  {path:"Dashboard",component:DashboardComponent,canActivate:[adminGuard]},
  {path:"Dashboard/Bookings",component:AdminbookingsComponent,canActivate:[adminGuard]},
  
  //wildcard route
  // {path: '**', redirectTo: ''}
  {path:'**' , component:NotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
