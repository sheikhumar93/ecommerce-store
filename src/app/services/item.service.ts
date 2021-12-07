import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Product } from '../models/Product';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  products: Product[] = [new Product()]

  constructor(private http: HttpClient) { }

  getItems(): Observable<Product[]> {
    return this.http.get<Product[]>("/assets/data.json")
  }

  getItem(id: number) {
    return this.products.filter(obj => {
      return obj.id === id
    })[0]
  }
}
