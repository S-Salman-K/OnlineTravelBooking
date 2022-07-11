import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import baseURL from './baseURL';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  public loginStatusSubject = new Subject<boolean>();

  constructor(private http: HttpClient) {
  }
  //Generate Token

  public generateToken(userLoginData: any) {
    return this.http.post(`${baseURL}/generate-token`, userLoginData);
  }

  //Store token in local storage

  public loginUser(token: any) {
    localStorage.setItem("token", token);
    return true;
  }

  //Get Token From Local Storage

  public getToken() {
    return localStorage.getItem("token");
  }

  //check user is logged in or not
  public isLoggedin() {
    let token = localStorage.getItem("token");

    if (token === '' || token === undefined || token === null) {
      return false;
    } else {
      return true;
    }
  }

  //Remove Token from Local Storage(Log out)
  public logout() {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    return true;
  }

  //Set User Details
  public setUser(user: any) {
    localStorage.setItem("user", JSON.stringify(user));
  }

  //Get User Details
  public getUser() {
    let user = localStorage.getItem("user");
    if (user != null) {
      return JSON.parse(user);
    } else {
      this.logout();
      return null;
    }
  }

  //Get Role of User

  public getUserRole() {
    let user = this.getUser();

    return user.authorities[0].authority;
  }

  //Get Current User
  public getCurrentUser() {
    return this.http.get(`${baseURL}/current-user`)
  }

}


