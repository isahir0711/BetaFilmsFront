import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ProductDTO } from './product';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  apiURL = environment.apiURL + 'api/Products';

  constructor(private http:HttpClient) {}

  public getProduct(id:string):Observable<ProductDTO>{
    return this.http.get<ProductDTO>(`${this.apiURL}/GetProductById/${id}`);
  }

  public getProducts():Observable<ProductDTO[]>{
    return this.http.get<ProductDTO[]>(`${this.apiURL}/GetProducts`);
  }

  public createProduct(prod:ProductDTO): Observable<ProductDTO>{
    return this.http.post<ProductDTO>(`${this.apiURL}/CreateProduct`,prod);
  }

  public deleteProduct(id:number):Observable<any>{
    return this.http.delete(`${this.apiURL}/Delete/${id}`);
  }
}
