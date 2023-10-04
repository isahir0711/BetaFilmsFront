import { Component, OnInit } from '@angular/core';
import { ProductDTO } from '../product';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-productslist',
  templateUrl: './productslist.component.html',
  styleUrls: ['./productslist.component.css']
})
export class ProductslistComponent implements OnInit {

  constructor(private productsService:ProductsService){}

  products: ProductDTO[] = [];

  ngOnInit(): void {
    this.getProducts();
    
  }

  getProducts(){
    this.productsService.getProducts().subscribe(response =>{
      this.products = response;
    })
  }

  deleteProd(i:number){
    this.productsService.deleteProduct(this.products[i].id).subscribe();

    const $prodCard = document.getElementById(`prod-${i}`);

    if($prodCard){
      $prodCard.classList.add('deleted');

      setTimeout(() => {
        this.products.splice(i,1);
      }, 300);

    }
  }
}
