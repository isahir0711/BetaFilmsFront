import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BookingDTO } from 'src/app/bookings/booking';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BookingsService {

  constructor(private _http:HttpClient) { }

  apiURL = environment.apiURL + 'api/Bookings';

  public getUserBookings():Observable<BookingDTO[]>{
    return this._http.get<BookingDTO[]>(`${this.apiURL}/GetUserBookings`);
  }

  public getBookings():Observable<BookingDTO[]>{
    return this._http.get<BookingDTO[]>(`${this.apiURL}/GetAllBookings`);
  }
 
}
