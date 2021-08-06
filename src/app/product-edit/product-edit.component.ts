import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../product/product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {
  product: Product;
  constructor(
     private activateRoute: ActivatedRoute,
     private productService: ProductService
  ) {}

  ngOnInit(): void {
    this.getInfo();
  }

  getInfo(){
    this.activateRoute.params.subscribe(params => { 
      this.productService.getInfo(params.id).subscribe(data => {
        this.product = data;
      });
    });
  }

  onUpdateProduct(){
    this.productService.updateProduct(this.product).subscribe(data => {
      alert("Cap nhat thanh cong");
    })
  }
}
