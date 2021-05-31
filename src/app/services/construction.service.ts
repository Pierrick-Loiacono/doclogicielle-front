import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Construction } from '../interfaces';

@Injectable({
  providedIn: 'root'
})
export class ConstructionService {

  private url: string = environment.API_URL;

  constructor(private http: HttpClient) { }

  getConstructions() {
    const user_id = localStorage.getItem("user_id");
    return this.http.get<Array<Construction>>(`${this.url}/constructions`,{ headers: new HttpHeaders({ 'user-id': `${user_id}`})});
  }
}
