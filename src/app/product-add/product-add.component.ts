import { Component,EventEmitter, OnInit, Output } from '@angular/core';
import { ProductService } from '../product.service';
import {Product} from '../product/product';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent implements OnInit {
    //  @Output() data = new EventEmitter<Product>();
     product: Product = {
      id: 1,
      name: '', 
      price: 0,
      desc: '',
      status: false,
      img: ''
     }
    // product: Product = new Product();

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    
  }
  onAddProduct(){
    this.productService.addProduct(this.product).subscribe(data => {
      console.log(data);
    });
  }
}
