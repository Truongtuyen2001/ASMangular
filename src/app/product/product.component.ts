import { Component, OnInit, Input } from '@angular/core';
import { Product } from './product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-products',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductsComponent implements OnInit {
  // @Input() products : Product[];
  products: Product[];
  data: Product;

  myClass = 'table-bordered';
  statusDirective = false;

  constructor(private productService: ProductService) { }

  ngOnInit() {
    // this.products = this.productService.getProducts();
    this.getProducts();
  }
  changeStatus() {
    this.statusDirective = !this.statusDirective;
  }
  getProducts() {
    this.productService.getProducts().subscribe(data => {
      this.products = data;
    })
  }
  removeItem(id: number) {
    this.productService.removeProduct(id).subscribe(data => {
      this.products = this.products.filter(item => item.id !== id);
    });

  }
  onSubmit(event: any) {
    event.preventDefault();
  }

}
