import { Component, OnInit } from '@angular/core';
import { BookingsService } from 'src/app/services/bookings/bookings.service';
import { ProductsService } from '../products/products.service';
import { BookingDTO } from 'src/app/bookings/booking';
import { catchError, tap } from 'rxjs';

@Component({
  selector: 'app-adminbookings',
  templateUrl: './adminbookings.component.html',
  styleUrls: ['./adminbookings.component.css']
})
export class AdminbookingsComponent implements OnInit {

  constructor(private _bookingService:BookingsService,private _productsService:ProductsService) {
  }
  ngOnInit(): void {
    this.getBookings();
  }
  bookings: BookingDTO[] = [];

  getBookings(){
    this._bookingService.getBookings().pipe(
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
