import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

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
    return this.http.post<{token: string | null}>(`${this.url}/login`, {mail: mail, password: password});
  }

  /**
   * Send a request to check if user is connected (return the user if not)
   * @returns current user
   */
  me() {
    const token = localStorage.getItem("token");

    let user = {};

    this.http.get(
      `${this.url}/user/me`,
      { headers: new HttpHeaders({ 'Authorization': `Bearer ${token}`})}
    ).subscribe(
      user => user = user,
      err => console.error(err)
    );

    return user;
  }

}
