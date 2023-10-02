import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { AuthenticationResponse, UserCreds } from '../accounts/user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SecurityService {
  
  constructor(private httpClient: HttpClient) { }

  apiURL = environment.apiURL + 'api/Accounts';

  private readonly tokenkey = 'token';
  private readonly expirationkey = 'expiration';
  private readonly roleField = "role";

  isLogged(): boolean{
    const token = localStorage.getItem(this.tokenkey);

    if(!token){
      return false;
    }

    const expiration = localStorage.getItem(this.expirationkey);

    if(!expiration)
    {
      return false;
    }

    const expirationdate = new Date(expiration);

    if(expirationdate <= new Date()){
      this.logOut();
      return false;
    }

    return true;

  }

  logOut(){
    localStorage.removeItem(this.tokenkey);
    localStorage.removeItem(this.expirationkey);
  }

  getRole(): string{
    return this.getTokenField(this.roleField);
  }

  getTokenField(field: string): string{
    const token = localStorage.getItem(this.tokenkey);
    if(!token){
      return '';
    }
    var tokenData = JSON.parse(atob(token.split('.')[1]));
    return tokenData[field];
    
  }

  getToken(){
    return localStorage.getItem(this.tokenkey);
  }

  signIn(credentials: UserCreds): Observable<AuthenticationResponse>{
    return this.httpClient.post<AuthenticationResponse>(this.apiURL + '/SignIn',credentials);
  }

  logIn(credentials: UserCreds): Observable<AuthenticationResponse>{

    return this.httpClient.post<AuthenticationResponse>(this.apiURL + '/LogIn',credentials);
  }

  saveToken(authenticationResponse: AuthenticationResponse){
    localStorage.setItem(this.tokenkey,authenticationResponse.token);
    localStorage.setItem(this.expirationkey,authenticationResponse.expiration.toString());
  }
}
