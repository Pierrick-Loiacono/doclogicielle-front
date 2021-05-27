import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

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
    const url = id ? this.url : `${this.url}/${id}`
    return this.http.get<Observable<Array<Product>>>(url);
  }

  postProduct(product: NewProduct) {
    return this.http.post(this.url, product)
  }
}
