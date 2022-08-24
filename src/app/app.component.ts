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
    id: '',
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
    if(this.product.id === '') {
      this.productService.addProduct(this.product)
      .subscribe(
        response => {
          this.getAllProducts();
          this.product = {
            id: '',
            name: '',
            price: ''
          };
        }
        );
    } else {
      this.updateProduct(this.product);
    }
    //console.log(this.product);
    }
    
    deleteProduct(id: string) {
      this.productService.deleteProduct(id)
      .subscribe(
        response => {
          this.getAllProducts();
        }
      );
    }

    populateForm(product: Product) {
      this.product = product; 
    }

    updateProduct(product: Product) {
      
    }
}
