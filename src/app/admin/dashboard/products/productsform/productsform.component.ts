import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProductsService } from '../products.service';
import { ProductDTO } from '../product';
import { catchError, tap } from 'rxjs';
import { Router } from '@angular/router';
import { ToastService } from 'src/app/reusable/toast.service';

@Component({
  selector: 'app-productsform',
  templateUrl: './productsform.component.html',
  styleUrls: ['./productsform.component.css']
})
export class ProductsformComponent {

  formProd:FormGroup;

  constructor(private formBuilder:FormBuilder,private productsService: ProductsService,private router:Router,private toastService:ToastService) {
    this.formProd = formBuilder.group({
      name:['',{validators:[Validators.required,Validators.maxLength(35)]}],
      description:['',{validators:[Validators.required,Validators.maxLength(600)]}],
      price:['',{validators:[Validators.required]}],

    })
  }

  createProd(){
    if(this.formProd.valid){
      const prod: ProductDTO = this.formProd.value;

      this.showToast();

      this.productsService.createProduct(prod).pipe(
        tap(() =>{
          setTimeout(()=>{
            this.router.navigate(['/Dashboard/Products'])
          },800)
        }),
        catchError(error =>{
          console.error('Oppsie',error)
          throw error;
        })
      ).subscribe()
      
    }
    else{
      alert('?')
    }
  }

  showToast() {
    const toastData = {
      title: 'Producto Creado',
      description: 'Producto Creado con exito.',
    };
    this.toastService.showToast(toastData);
  }
}
