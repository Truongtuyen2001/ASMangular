import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsComponent } from './product/product.component';
import { ProductAddComponent } from './product-add/product-add.component';

import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductService } from './product.service';

import { ProductEditComponent } from './product-edit/product-edit.component';
import { HeaderComponent } from './header/header.component';
import { NavComponent } from './nav/nav.component';


@NgModule({
  declarations: [
    
    AppComponent,
    ProductsComponent,
    ProductAddComponent,
  
    ProductDetailComponent,
 
    ProductEditComponent,
    HeaderComponent,
    NavComponent,
   
  ],
  imports: [
    HttpClientModule,
    FormsModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
