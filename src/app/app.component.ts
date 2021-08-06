import { Component } from '@angular/core';
import { ProductService } from './product.service';
import {Product} from './product/product';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  // products: Product[];
  // constructor(private productService: ProductService){}

  // ngOnInit(){
  //   this.products = this.productService.getProducts()
  // }
}

