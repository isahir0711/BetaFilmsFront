import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { PaymentRequestDTO } from './paymentrequest';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  constructor(private http: HttpClient) { }

  apiURL = environment.apiURL;

  tryPay(payrequest: PaymentRequestDTO): Observable<PaymentRequestDTO> {
    return this.http.post<PaymentRequestDTO>(`${this.apiURL}/create-payment-intent `, payrequest)
    // .pipe(
    //   catchError(err => err)
    // );
  }
}
