import { Component } from '@angular/core';
import { UserCreds } from '../user';
import { SecurityService } from 'src/app/services/security.service';
import { Router } from '@angular/router';
import { parseAPIErrors } from 'src/app/utilities/apiErrors';
import { catchError, map } from 'rxjs';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent {

  constructor(private securityService:SecurityService,private router:Router) {
  }

  errors: string[] = [];

  //Deprecated version
  // signin(credentials: UserCreds){
  //   this.securityService.signIn(credentials)
  //   .subscribe(response=>{
  //     this.securityService.saveToken(response);
  //     this.router.navigate(['']);
  //   },errorsAPi=>
  //   this.errors = parseAPIErrors(errorsAPi));
  // }

  
  signin(creds:UserCreds){
    this.securityService.signIn(creds).pipe(
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
