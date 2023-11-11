import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserCreds } from '../user';
import { SecurityService } from 'src/app/services/security.service';
import { catchError, map, tap } from 'rxjs';
import { parseAPIErrors } from 'src/app/utilities/apiErrors';
import { ToastService } from 'src/app/reusable/toast.service';
import { Router } from '@angular/router';
import { RecoveryService } from 'src/app/services/recovery.service';

@Component({
  selector: 'app-recoverpass',
  templateUrl: './recoverpass.component.html',
  styleUrls: ['./recoverpass.component.css']
})
export class RecoverpassComponent {
  ngOnInit():void{

  }

  form: FormGroup;

  constructor(private _formBuilder:FormBuilder,
    private _securityService:SecurityService,
    private toastService:ToastService,
    private router:Router,
    private recoveryService:RecoveryService) {
      this.form = _formBuilder.group({
        email:['',{validators:[Validators.required,Validators.email]}]
      })
  }
  
  errorMail:string='';

  sendEmail(){
    const formValues = this.form.value;
    const userCreds: UserCreds = {
      email: formValues.email,
      password:'0'
    }

    this._securityService.getPasswordRecover(userCreds).pipe(
      map((res)=>{
        this.showToast();
      }),
      catchError(error=>{
        console.error(parseAPIErrors(error));
        this.errorMail = "Hubo un error con el correo proporcionado";
        throw error;
      })
    ).subscribe();


  }

  showToast() {
    const toastData = {
      title: 'Correo enviado',
      description: 'Link de recuperacion enviado a tu correo.',
    };
    this.toastService.showToast(toastData);
  }
}
