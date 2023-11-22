import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastService } from 'src/app/reusable/toast.service';
import { SecurityService } from 'src/app/services/security.service';
import { ConfirmEmailDTO } from '../user';
import { catchError, tap } from 'rxjs';
import { parseAPIErrors } from 'src/app/utilities/apiErrors';

@Component({
  selector: 'app-emailconfirmed',
  templateUrl: './emailconfirmed.component.html',
  styleUrls: ['./emailconfirmed.component.css']
})
export class EmailconfirmedComponent {

  email:string='';
  confirmToken:string='';

  confirmEmailDTO:ConfirmEmailDTO = {
    email:'',
    confirmEmailToken:''
  }

  constructor(private activatedRoute:ActivatedRoute,private securityService:SecurityService,private toastService:ToastService){}

  ngOnInit():void{
    this.activatedRoute.params.subscribe(params=>{
      this.confirmEmailDTO.email = params['email'];
      this.confirmEmailDTO.confirmEmailToken = params['token']
    });
    this.confirmEmail();
  }

  confirmEmail():void{
    this.securityService.confirmEmail(this.confirmEmailDTO).pipe(
      tap(res=>{
        this.showToastSuccess();
      }),
      catchError(error=>{
        this.showToastError();
        console.error(parseAPIErrors(error))
        throw error;
      })
    ).subscribe()
  }

  showToastSuccess(){
    const toastData ={
      title: 'Correo Confirmado',
      description:'Correo confirmado satisfactoriamente'
    };
    this.toastService.showToast(toastData);
  }

  showToastError(){
    const toastData ={
      title: 'Error al confirmar el correo',
      description:'Error en la confirmacion del correo'
    };
    this.toastService.showToast(toastData);
  }
}
