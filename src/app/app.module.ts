import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// Import the library
import { NgxStripeModule } from 'ngx-stripe';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar/navbar.component';
import { HomeComponent } from './landing/home/home.component';
import { CardComponent } from './reusable/card/card.component';
import { PlansComponent } from './landing/plans/plans.component';
import { NotfoundComponent } from './landing/notfound/notfound.component';
import { AuthformComponent } from './accounts/authform/authform.component';
import { LoginComponent } from './accounts/login/login.component';
import { SigninComponent } from './accounts/signin/signin.component';
import { AuthComponent } from './accounts/auth/auth.component';
import { OverlayDirective } from './utilities/overlay.directive';
import { PaymentComponent } from './payments/payment/payment.component';
import { PayplanComponent } from './landing/plans/payplan/payplan.component';
import { SuccessComponent } from './payments/success/success.component';
import { ProductsformComponent } from './admin/dashboard/products/productsform/productsform.component';
import { ProductslistComponent } from './admin/dashboard/products/productslist/productslist.component';
import { DashboardComponent } from './admin/dashboard/dashboard/dashboard.component';
import { SecurityInterceptorService } from './services/interceptors/security-interceptor.service';
import { ToastComponent } from './reusable/toast/toast.component';
import { BookingsComponent } from './bookings/bookings.component';
import { AdminbookingsComponent } from './admin/dashboard/adminbookings/adminbookings.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    CardComponent,
    PlansComponent,
    NotfoundComponent,
    AuthformComponent,
    LoginComponent,
    SigninComponent,
    AuthComponent,
    OverlayDirective,
    PaymentComponent,
    PayplanComponent,
    SuccessComponent,
    ProductsformComponent,
    ProductslistComponent,
    DashboardComponent,
    ToastComponent,
    BookingsComponent,
    AdminbookingsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    NgxStripeModule.forRoot('pk_test_51MuqjIF42Dhd4yKjjpunZzOS6jmStZqhKzmqr4eVg7ajPMNLSF8OFrdGZ4udzI8HABJqIYf9IHKtz148MxfnsRFy00XngnCFgt')
  ],
  providers: [{
    provide:HTTP_INTERCEPTORS,
    useClass:SecurityInterceptorService,
    multi:true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
