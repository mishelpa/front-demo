import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Product, Products } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  apiUrl: string = environment.api;

  constructor(private http: HttpClient) { }

  getProducts(item: number) {
    return this.http.get<Products>(`${this.apiUrl}/products?limit=10&skip=${item*10}`)
  }

  searchProducts(name: string) {
    return this.http.get<Products>(`${this.apiUrl}/products/search?q=${name}`)
  }

  getProductById(id: number) {
    return this.http.get<Product>(`${this.apiUrl}/products/${id}`)
  }


}
