import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar/navbar.component';
import { HomeComponent } from './landing/home/home.component';
import { CardComponent } from './reusable/card/card.component';
import { PlansComponent } from './landing/plans/plans.component';
import { NotfoundComponent } from './landing/notfound/notfound.component';
import { AuthformComponent } from './accounts/authform/authform.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    CardComponent,
    PlansComponent,
    NotfoundComponent,
    AuthformComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
