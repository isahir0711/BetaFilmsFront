import { Component, OnInit } from '@angular/core';
import { ProductDTO } from '../product';
import { ProductsService } from '../products.service';
import { ToastService } from 'src/app/reusable/toast.service';
import { catchError, tap } from 'rxjs';

@Component({
  selector: 'app-productslist',
  templateUrl: './productslist.component.html',
  styleUrls: ['./productslist.component.css']
})
export class ProductslistComponent implements OnInit {

  constructor(private productsService: ProductsService, private toastService: ToastService) { }

  products: ProductDTO[] = [];

  ngOnInit(): void {
    this.getProducts();

  }

  getProducts() {
    this.productsService.getProducts().subscribe(response => {
      this.products = response;
    })
  }

  deleteProd(i: number) {
    this.productsService.deleteProduct(this.products[i].id).pipe(
      tap((res) => {
        this.deleteFromArray(i);
      }),
      catchError(err => {
        this.showToastError();
        //console.error(err);
        throw err;
      })
    ).subscribe();

  }

  deleteFromArray(i:number){
    const $prodCard = document.getElementById(`prod-${i}`);

    if ($prodCard) {
      $prodCard.classList.add('deleted');

      this.showToast();

      setTimeout(() => {
        this.products.splice(i, 1);
      }, 300);

    }
  }

  showToast() {
    const toastData = {
      title: 'Producto Eliminado',
      description: 'Producto Eliminado con exito.',
    };
    this.toastService.showToast(toastData);
  }

  showToastError() {
    const toastData = {
      title: 'Error el eliminar',
      description: 'Verifica que no existan reservaciones',
    };
    this.toastService.showToast(toastData);
  }
}
