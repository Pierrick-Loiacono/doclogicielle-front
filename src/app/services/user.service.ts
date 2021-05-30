import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { User } from 'src/app/interfaces'

@Injectable({
  providedIn: 'root'
})
export class UserService {

  /**
   * @var {string} url the api url
   */
  private url: string = environment.API_URL;

  /**
   * Constructor
   * @param http autoinjected httpclient
   */
  constructor(private http: HttpClient) { }

  /**
   * Send credentials to server and retrieve JWT
   * @param mail
   * @param password
   * @returns
   */
  login(mail: string, password: string) {
    return this.http.post<{id: number, usertype: string}>(`${this.url}/authentication/login`, {mail: mail, password: password});
  }

  /**
   * Send a request to check if user is connected (return the user if not)
   * @returns {Observable<User>} current user
   */
  me() {
    const user_id = localStorage.getItem("user_id");
    return this.http.get<User>(`${this.url}/user/me`,{ headers: new HttpHeaders({ 'user-id': `${user_id}`})})
  }

}
