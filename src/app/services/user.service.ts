import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { User } from 'src/app/interfaces'
import { Observable } from 'rxjs';

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

  /**
   * Create a user in database
   * @param firstName prenom
   * @param lastName nom
   * @param email mail
   * @param pwd plain password
   * @param usertype usertype
   * @returns {Observable} the response
   */
  create(firstName:string, lastName:string, email:string, pwd:string, usertype:string) {
    const user_id = localStorage.getItem("user_id");
    return this.http.post(`${this.url}/users`, {
      firstName: firstName,
      lastName: lastName,
      mail: email,
      pwd: pwd,
      usertype: usertype
    },{ headers: new HttpHeaders({ 'user-id': `${user_id}`})})
  }

  /**
   * Fetch all users
   * @returns {Observable<Array<User>>} users lists
   */
  fetch(): Observable<Array<User>>{
    const user_id = localStorage.getItem("user_id");
    return this.http.get<Array<User>>(`${this.url}/users`,{ headers: new HttpHeaders({ 'user-id': `${user_id}`})})
  }

  /**
   * Delete a user in API
   * @param id user id
   * @returns {Observable} the response
   */
  delete(id: number) {
    const user_id = localStorage.getItem("user_id");
    return this.http.delete(`${this.url}/users/${id}`,{ headers: new HttpHeaders({ 'user-id': `${user_id}`})})
  }

  /**
   * Recherche les notifications sur les stocks
   * @returns {Observable<{content: string}>} The response
   */
  getLastNotif() {
    const user_id = localStorage.getItem("user_id");
    return this.http.get<{content: string}>(`${this.url}/users/notifs`,{ headers: new HttpHeaders({ 'user-id': `${user_id}`})})
  }
}
