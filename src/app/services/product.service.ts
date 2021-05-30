import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Product } from "../interfaces";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private url: string = environment.API_URL;

  constructor(private http: HttpClient) { }

  /**
   * Fetch one product or all product if 'id' is undefined
   * @param {number} id product id
   * @returns {Observable<Array<Product>>>} the list of concerned products
   */
  getProduct(id?: number) {
    const url = id ?  `${this.url}/product/${id}` : `${this.url}/product`;
    console.log(url)
    console.log(this.http.get<Observable<Array<Product>>>(url,{ headers: new HttpHeaders({ 'user-id': `1`})}))
    return this.http.get<Observable<Array<Product>>>(url,{ headers: new HttpHeaders({ 'user-id': `1`})});
  }

  postProduct(product: Product) {
    return this.http.post(this.url, product)
  }
}
