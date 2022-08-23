import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductComponent } from '../components/product/product.component';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductApiService {

  readonly productAPIUrl = "https://localhost:5001/Api/Product";

  constructor(private http:HttpClient) { }

 /* getProductList():Observable<any[]> {
    return this.http.get<any>(this.productAPIUrl + '/Product');
  } */

  getAllProducts(): Observable<Product[]>
  {
    return this.http.get<Product[]>(this.productAPIUrl);
  }

 /* addProduct(data:any) {
    return this.http.post(this.productAPIUrl + '/Product', data);
  }

  updateProduct(data:any) {
    return this.http.put(this.productAPIUrl + '/Product', data);
  }

  deleteProduct(id:number|string) {
    return this.http.delete(this.productAPIUrl + `/Product/${id}`);
  }*/
}
