import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { NewProvider, Product, Provider } from "../interfaces";

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
    const user_id = localStorage.getItem("user_id");
    return this.http.get<Array<Product>>(`${this.url}/product`,{ headers: new HttpHeaders({ 'user-id': `${user_id}`})});
  }

  /**
   * Add product to API
   * @param payload data
   * @return {Observable} the response
   */
  postProduct(payload: Object) {
    const user_id = localStorage.getItem("user_id");
    return this.http.post(`${this.url}/product/`, payload, { headers: new HttpHeaders({ 'user-id': `${user_id}`})})
  }

  /**
   * Retrieve all providers
   * @returns {Observable<Array<Provider>} list of provider
   */
  getProviders(){
    const user_id = localStorage.getItem("user_id");
    return this.http.get<Array<Provider>>(`${this.url}/provider`,{ headers: new HttpHeaders({ 'user-id': `${user_id}`})})
  }

  /**
   * Update a product in API
   * @param {Object} payload of new product
   * @return {Observable} the response
   */
  putProduct(payload: Product) {
    const user_id = localStorage.getItem("user_id");
    return this.http.put(`${this.url}/product/${payload.id}`, payload, { headers: new HttpHeaders({ 'user-id': `${user_id}`})})
  }

  /**
   * Update a product in API
   * @param {Object} payload of new product
   * @return {Observable} the response
   */
   putProvider(payload: Provider) {
    const user_id = localStorage.getItem("user_id");
    return this.http.put(`${this.url}/provider/${payload.id}`, payload, { headers: new HttpHeaders({ 'user-id': `${user_id}`})})
  }

  /**
   * delete a product in API
   * @param {number} id id of product
   * @return {Observable} the response
   */
  deleteProduct(id: number) {
    const user_id = localStorage.getItem("user_id");
    return this.http.delete(`${this.url}/product/${id}`, { headers: new HttpHeaders({ 'user-id': `${user_id}`})})
  }

  /**
   * delete a provider in API
   * @param {number} id id of provider
   * @return {Observable} the response
   */
  deleteProvider(id: number) {
    const user_id = localStorage.getItem("user_id");
    return this.http.delete(`${this.url}/provider/${id}`, { headers: new HttpHeaders({ 'user-id': `${user_id}`})})
  }

  /**
   * Add a provider to database
   * @param {NewProvider} provider provider to add
   * @return {Observable} the response
   */
  postProvider(provider: NewProvider) {
    const user_id = localStorage.getItem("user_id");
    return this.http.post(`${this.url}/provider`, provider, { headers: new HttpHeaders({ 'user-id': `${user_id}`})})
  }
}
