import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { catchError, tap } from 'rxjs';
import { ToastService } from 'src/app/reusable/toast.service';
import { RecoveryService } from 'src/app/services/recovery.service';
import { SecurityService } from 'src/app/services/security.service';
import { ChangePasswordDTO } from '../user';
import { parseAPIErrors } from 'src/app/utilities/apiErrors';

@Component({
  selector: 'app-changepass',
  templateUrl: './changepass.component.html',
  styleUrls: ['./changepass.component.css']
})
export class ChangepassComponent {
  form: FormGroup;

  constructor(private _formBuilder:FormBuilder,
    private _securityService:SecurityService,
    private toastService:ToastService,
    private router:Router,
    private recoveryService:RecoveryService,
    private activatedRoute: ActivatedRoute) {
      this.form = _formBuilder.group({
        password:['',{validators:[Validators.required]}],
        passwordConfirm:['',{validators:[Validators.required]}],
      })
  }
  recoverToken:string="";
  recoverEmail:string="";

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      this.recoverToken= params['token'];
      this.recoverEmail= params['email']
    });

  }
  
  errorPass:string='';

  errors:string [] = [];

  changePassword():void{
    const formValues = this.form.value;
    const newPassword = formValues.password;
    const newPasswordConfirm = formValues.passwordConfirm;

    if(newPassword != newPasswordConfirm){
      this.errorPass = "Las contraseñas no coinciden";
      return;
    }
    
    const changePassDTO: ChangePasswordDTO = {
      emailToChange:this.recoverEmail,
      newPassword:newPassword,
      recoverToken:this.recoverToken
    }

    this._securityService.changePassword(changePassDTO).pipe(
      tap(res =>{
        this.router.navigate(['Accounts/LogIn']);
      }),
      catchError(error=>{
        console.error(parseAPIErrors(error));
        this.errors = parseAPIErrors(error);
        throw error;
      })
    ).subscribe();



  }
}
