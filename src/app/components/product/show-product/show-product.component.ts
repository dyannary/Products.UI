import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductApiService } from 'src/app/services/product-api.service';

@Component({
  selector: 'app-show-product',
  templateUrl: './show-product.component.html',
  styleUrls: ['./show-product.component.css']
})
export class ShowProductComponent implements OnInit {

  productList$!:Observable<any[]>;

  constructor(private service:ProductApiService) { }

  ngOnInit(): void {
    this.productList$ = this.service.getProductList();
  }

}
