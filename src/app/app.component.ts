import { Component, OnInit } from '@angular/core';
import { Product } from './models/product.model';
import { ProductApiService } from './services/product-api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Products';
  products: Product[] = [];

  constructor(private productService: ProductApiService) {

  }
  ngOnInit(): void {
    this.getAllProducts();
  }

  getAllProducts() {
    this.productService.getAllProducts()
    .subscribe(
      response => {
        this.products = response;
      }
    );
  }
}
