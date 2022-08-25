import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductComponent } from '../components/product/product.component';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductApiService {

  readonly productAPIUrl = "https://localhost:5001/api/Product";

  constructor(private http:HttpClient) { }

  getProduct(id:number): Observable<Product> {
    return this.http.get<Product>(this.productAPIUrl + '/' + id);
  }

  getAllProducts(): Observable<Product[]>
  {
    return this.http.get<Product[]>(this.productAPIUrl);
  }

  addProduct(product: Product): Observable<Product> {
    return this.http.post<Product>(this.productAPIUrl, product);
  }

  deleteProduct(id: number): Observable<Product> {
    return this.http.delete<Product>(this.productAPIUrl + '/' + id);
  }

  updateProduct(product: Product): Observable<Product> {
    return this.http.put<Product>(this.productAPIUrl + '/' , product);
  }
}
