import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductApiService {

  readonly productAPIUrl = "https://localhost:5001/api";

  constructor(private http:HttpClient) { }

  getProductList():Observable<any[]> {
    return this.http.get<any>(this.productAPIUrl + '/Product');
  } 

  addProduct(data:any) {
    return this.http.post(this.productAPIUrl + '/Product', data);
  }

  updateProduct(data:any) {
    return this.http.put(this.productAPIUrl + '/Product', data);
  }

  deleteProduct(id:number|string) {
    return this.http.delete(this.productAPIUrl + `/Product/${id}`);
  }
}
