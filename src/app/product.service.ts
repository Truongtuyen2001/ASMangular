import { Injectable } from '@angular/core';
import { MockData } from './MockData';
import { Product } from './product/product';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  // products: Product[] = MockData;
  API: string = "https://60ee594ceb4c0a0017bf43cb.mockapi.io/api/product";

  constructor(private http : HttpClient) {}

  getProducts(): Observable<Product[]>{
    return this.http.get<Product[]>(this.API);
  }
  addProduct(item: Product) :Observable<Product> {
    return this.http.post<Product>(this.API, item);
  }
  getInfo(id:number): Observable<Product>{
    return this.http.get<Product>(`${this.API}/${id}`);
  }
  removeProduct(id: number): Observable<Product> {
    return this.http.delete<Product>(`${this.API}/${id}`);
  }
  updateProduct(item:Product): Observable<Product> {
    return this.http.put<Product>(`${this.API}/${item.id}`,item);
  }
}