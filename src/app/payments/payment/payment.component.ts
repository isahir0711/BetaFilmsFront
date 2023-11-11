import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { StripeService, StripeCardComponent } from 'ngx-stripe';
import {
  StripeCardElementOptions,
  StripeElementsOptions
} from '@stripe/stripe-js';
import { HttpClient } from '@angular/common/http';
import { PaymentService } from '../payment.service';
import { PaymentRequestDTO } from '../paymentrequest';
import { catchError, map, tap } from 'rxjs';
import { Router } from '@angular/router';
import { ProductsService } from 'src/app/admin/dashboard/products/products.service';
import { ProductDTO } from 'src/app/admin/dashboard/products/product';
import { parseAPIErrors } from 'src/app/utilities/apiErrors';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {

  @ViewChild(StripeCardComponent) card: StripeCardComponent | undefined;

  @Input() priceID: string = "";

  cardOptions: StripeCardElementOptions = {
    style: {
      base: {
        iconColor: '#666EE8',
        color: '#31325F',
        fontWeight: '300',
        fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
        fontSize: '18px',
        '::placeholder': {
          color: '#CFD7E0'
        }
      }
    }
  };

  elementsOptions: StripeElementsOptions = {
    locale: 'es'
  };

  stripeTest: FormGroup;

  product: ProductDTO | undefined;

  constructor(private fb: FormBuilder,
    private stripeService: StripeService,
    private http: HttpClient,
    private paymentsService: PaymentService,
    private router: Router,
    private productsService: ProductsService) {


    this.stripeTest = this.fb.group({
      name: ['', [Validators.required]]
    });
  }

  ngOnInit(): void {

    //also , we can make a fetch to the api and verify if the priceId provided is valid, if no, redirect to 404
    if (this.priceID != "") {
    }
    else {
      this.router.navigate(['']);
    }

    this.getProductDetails();

    this.setMinAndMaxDate();

    this.stripeTest = this.fb.group({
      name: ['', [Validators.required]],
      date: ['', [Validators.required]]
    });
  }

  getProductDetails() {
    this.productsService.getProduct(this.priceID).pipe(
      tap((req) => {
        this.product = req
      }),
      catchError(err => {
        console.error(err);
        throw err;
      })
    ).subscribe();
  }

  setMinAndMaxDate() {
    const dateTimeInput: HTMLInputElement = document.getElementById('date') as HTMLInputElement;

    const actualDate: Date = new Date();

    const minDate: Date = new Date();
    minDate.setDate(actualDate.getDate() + 7)

    const minDateFormated: string = minDate.toISOString().slice(0, 16);

    dateTimeInput.min = minDateFormated;


  }

  payreq: PaymentRequestDTO = { token: "", priceId: this.priceID, date: new Date() }

  createToken(): void {
    const name = this.stripeTest?.get('name')?.value;
    const date = this.stripeTest.get('date')?.value;

    const actualDate: Date = new Date();
    const minDate: Date = new Date();
    minDate.setDate(actualDate.getDate() + 6)

    const dateInput: Date = new Date(date);

    if (dateInput < minDate) {
      alert('La fecha no es valida');
      return;
    }

    if (this.card) {
      this.stripeService
        .createToken(this.card.element, { name })
        .subscribe((result) => {
          if (result.token) {

            this.payreq.token = result.token.id;
            this.payreq.priceId = this.priceID;
            this.payreq.date = date;

            this.paymentsService.tryPay(this.payreq).pipe(
              map((response: any) => {

                this.router.navigate(['Payments/Success']);
                //console.log('Respuesta del servidor:', response);
              }),
              catchError((error: any) => {
                alert(parseAPIErrors(error))
                console.error('Error al procesar la solicitud:', error);
                throw error;
              })
            ).subscribe();


          } else if (result.error) {
            // Error creating the token
            console.error(result.error.message);
          }
        });
    }
  }
}
