import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
//import {RequestOptions} from "@angular/http";

@Injectable()
export class UserService {

  constructor(private http: HttpClient) {
  }
  login(username: string, password: string): Observable<boolean> {
    console.log("logging in .........." + username + ">>>>>" + password);
    const headers = {
      'Authorization': 'Basic ' + btoa('clientId:secret'),
      'Content-type': 'application/x-www-form-urlencoded',
    }
    const body = new HttpParams()
      .set('username', username)
      .set('password', password)
      .set('grant_type', 'password');

    return this.http.post<{ access_token: string, refresh_token: string }>('http://localhost:9000/oauth/token', body, { headers })
      .pipe(
        map(res => {
          console.log('Access response ------>' + res.access_token);
          console.log('Refresh response ------>' + res.refresh_token);
          localStorage.setItem('access_token', res.access_token);
          localStorage.setItem('refresh_token', res.refresh_token);
          localStorage.setItem('isLoggedIn', 'true');
          sessionStorage.setItem('username', username);
          return true;
        },
          err => console.log("error happened while getting authorization token " + err))
      );


  }
  ConvertToJSON(product: any) {
    return JSON.parse(product);
  }
  isUserLoggedIn() {
    let user = sessionStorage.getItem('username')
    //console.log(!(user === null))
    return !(user === null)
  }


  public delete(url, ele): void {
    var headers = new HttpHeaders({ 'Content-type': 'application/json', 'Authorization': 'Bearer ' + localStorage.getItem('access_token') });
    this.http.post(url, ele, { headers: headers }).subscribe();
  }

  logout() {
    sessionStorage.removeItem('username');
    localStorage.removeItem('access_token');
    localStorage.setItem('isLoggedIn', 'false');
    console.log('logged out..........');
  }

  public get loggedIn(): boolean {
    return (localStorage.getItem('access_token') !== null);
  }

  getResource(resourceUrl): Observable<any> {
    var headers = new HttpHeaders({ 'Content-type': 'application/x-www-form-urlencoded; charset=utf-8', 'Authorization': 'Bearer ' + localStorage.getItem('access_token') });
    console.log("get >>>>>>>>>>>" + this.http.get(resourceUrl, { headers: headers }).subscribe(response => {


      console.log(response);
      localStorage.setItem('respons', JSON.stringify(response));
    }));
    return this.http.get(resourceUrl, { headers: headers });

  }


}
