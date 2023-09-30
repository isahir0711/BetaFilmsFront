import { Component } from '@angular/core';
import { UserCreds } from '../user';
import { SecurityService } from 'src/app/services/security.service';
import { Router } from '@angular/router';
import { parseAPIErrors } from 'src/app/utilities/apiErrors';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private securityService:SecurityService,private router:Router) {
  }
  
  errors: string[] = [];

  login(credentials: UserCreds){
    this.securityService.logIn(credentials)
    .subscribe(response=>{
      this.securityService.saveToken(response);
      this.router.navigate(['']);
    },errorsAPi=>
    this.errors = parseAPIErrors(errorsAPi));
  }
}
