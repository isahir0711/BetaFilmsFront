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


  plans: ProductDTO[] = [];

  ngOnInit(): void {
    this.getPlans();
  }

  getPlans(){
    this.productsService.getProducts().pipe(
      tap((data) =>{
        this.plans = data;
      }),
      catchError(error =>{
        console.error(error);
        throw error;
      })
    ).subscribe();
  }

}
