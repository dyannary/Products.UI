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
  product: Product = {
    id: 0,
    name: '',
    price: ''
    }
  constructor(private productService: ProductApiService) {}

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
  
  onSubmit() {
    if(this.product.id === 0) {
      this.productService.addProduct(this.product)
      .subscribe(
        response => {
          this.getAllProducts();
        }
        );
        console.log(this.product);
    } else {
      this.updateProduct(this.product);
    }
    }
    
    deleteProduct(id: number) {
      this.productService.deleteProduct(id)
      .subscribe(
        response => {
          this.getAllProducts();
        }
      );
    }

    populateList(product: Product) {
      this.product = product;
    }

    updateProduct(product: Product) {
      this.productService.updateProduct(product)
      .subscribe(
        response => {
          this.getAllProducts();
        }
      );
    }

    getValue() {
      console.log(this.product);
    }

    resetValue(product: Product) {

    }
}
