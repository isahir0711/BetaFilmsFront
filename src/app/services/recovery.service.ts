import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RecoveryService {

  private recoveryCode: string = "";
  private emailToChange: string = "";

  setRecoveryCode(codigo: string): void {
    this.recoveryCode = codigo;
  }

  getRecoveryCode(): string {
    return this.recoveryCode;
  }

  setEmailToChange(email: string): void {
    this.emailToChange = email;
  }

  getEmailToChange():string{
    return this.emailToChange;
  }
}
