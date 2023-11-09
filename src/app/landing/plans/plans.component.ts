import { Component, OnInit } from '@angular/core';
import { catchError, tap } from 'rxjs';
import { ProductDTO } from 'src/app/admin/dashboard/products/product';
import { ProductsService } from 'src/app/admin/dashboard/products/products.service';

@Component({
  selector: 'app-plans',
  templateUrl: './plans.component.html',
  styleUrls: ['./plans.component.css']
})
export class PlansComponent implements OnInit {

  constructor(private productsService: ProductsService){}

  columns:number= 1;

  plans: ProductDTO[] = [];

  ngOnInit(): void {
    this.getPlans();
  }

  setColumns(){
    const plansCount = this.plans.length;

    if(plansCount >= 3){
      this.columns = 3;
    }
    else if(plansCount >=2){
      this.columns = 2;
    }
  }

  getPlans(){
    this.productsService.getProducts().pipe(
      tap((data) =>{
        this.plans = data;
        this.setColumns();
      }),
      catchError(error =>{
        console.error(error);
        throw error;
      })
    ).subscribe();
  }

}
