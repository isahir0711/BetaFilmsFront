import { Component } from '@angular/core';
import { UserCreds } from '../user';
import { SecurityService } from 'src/app/services/security.service';
import { Router } from '@angular/router';
import { parseAPIErrors } from 'src/app/utilities/apiErrors';
import { catchError, map } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private securityService:SecurityService,private router:Router) {
  }
  
  errors: string[] = [];

  //Deprecated version of subscribe
  // login(credentials: UserCreds){
  //   this.securityService.logIn(credentials)
  //   .subscribe(response=>{
  //     this.securityService.saveToken(response);
  //     this.router.navigate(['']);
  //   },errorsAPi=>
  //   this.errors = parseAPIErrors(errorsAPi));
  // }


  LogIn(creds:UserCreds){
    this.securityService.logIn(creds).pipe(
      map((response)=>{
        this.securityService.saveToken(response);
        this.router.navigate(['']);
      }),
      catchError(err =>{
        this.errors= parseAPIErrors(err);
        console.error('http error',err);
        throw err;
      })
    ).subscribe();
  }


}
