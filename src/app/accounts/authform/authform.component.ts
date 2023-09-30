import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { UserCreds } from '../user';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-authform',
  templateUrl: './authform.component.html',
  styleUrls: ['./authform.component.css']
})
export class AuthformComponent implements OnInit {
  @Input() action:string="";
  @Input() errors:string[]=[];

  @Output()
  onSubmit: EventEmitter<UserCreds> = new EventEmitter<UserCreds>;

  form:FormGroup;

  
  constructor(private formBuilder: FormBuilder) { 
    this.form = this.formBuilder.group({
      email:[
        '',
        {
          validators:[Validators.required,Validators.email],
        },
      ],
      password:[
        '',
        {
          validators:[Validators.required,Validators.minLength(10)],
        },
      ],
    })
   }

   
  ngOnInit(): void {
    this.getErrorsEmail();
  }

   getErrorsEmail(){
    var field = this.form?.get('email');
    if(field?.hasError('required')){
      return 'the Email field is required';
    }

    if(field?.hasError('email')){
      return 'Enter a valid email';
    }

    return '';
  }
}
