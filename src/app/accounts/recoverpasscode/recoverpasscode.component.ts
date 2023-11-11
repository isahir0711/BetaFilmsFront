import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastService } from 'src/app/reusable/toast.service';
import { RecoveryService } from 'src/app/services/recovery.service';
import { SecurityService } from 'src/app/services/security.service';

@Component({
  selector: 'app-recoverpasscode',
  templateUrl: './recoverpasscode.component.html',
  styleUrls: ['./recoverpasscode.component.css']
})
export class RecoverpasscodeComponent {
  
  form: FormGroup;

  errors:string='';

  constructor(private _formBuilder:FormBuilder,
    private _securityService:SecurityService,
    private toastService:ToastService,
    private router:Router,
    private recoveryService:RecoveryService) {
      this.form = _formBuilder.group({
        code:['',{validators:[Validators.required,Validators.maxLength(4),Validators.pattern(/^\d{4}$/)]}]
      })
  }
  

  verifyCode():void{
    const formValues = this.form.value;
    const code = formValues.code;
    if(code === null){
      return;
    }

    if(code === this.recoveryService.getRecoveryCode()){
      this.router.navigate(['Accounts/ForgotPassword/ChangePass']);
    }
    else{
      this.errors = 'Error en el codigo';
      //alert('El codigo es incorrecto');
    }
  }
}
