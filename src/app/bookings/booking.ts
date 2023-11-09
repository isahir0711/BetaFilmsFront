import { ProductDTO } from "../admin/dashboard/products/product";

export interface BookingDTO{
    id:number,
    date:Date,
    priceId:string,
    Product:ProductDTO
    email:string
}
