import { Component, OnInit } from '@angular/core';
import { BookingsService } from '../services/bookings/bookings.service';
import { BookingDTO } from './booking';
import { catchError, tap } from 'rxjs';
import { ProductsService } from '../admin/dashboard/products/products.service';

@Component({
  selector: 'app-bookings',
  templateUrl: './bookings.component.html',
  styleUrls: ['./bookings.component.css']
})
export class BookingsComponent implements OnInit {

  constructor(private _bookingService:BookingsService,private _productsService:ProductsService) {
  }
  ngOnInit(): void {
    this.getBookings();
  }
  bookings: BookingDTO[] = [];

  getBookings(){
    this._bookingService.getUserBookings().pipe(
      tap((data)=>{
        this.bookings = data;
        this.bookings.forEach(bookings => {
          this._productsService.getProduct(bookings.priceId).pipe(
            tap((res)=>{
              bookings.Product = res;
            }),
            catchError(err=>{
              console.error(err);
              throw err;
            })
          ).subscribe();
        });
      }),
      catchError(err =>{
        console.error(err);
        
        throw err;
      })
    ).subscribe();
  }

}
