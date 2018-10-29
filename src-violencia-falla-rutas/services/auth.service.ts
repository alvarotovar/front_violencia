import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';

@Injectable()
export class AuthService {
   username: string;
   loggedIn: boolean;
   url = 'http://localhost:8000/auth';

   constructor(private http: Http) {
      this.username = '';
      this.loggedIn = false;
   }
   
   login(userInfo) {
      let url = `${this.url}/login`;
      let iJon = JSON.stringify(userInfo);

      return this.http.post(url, iJon, {
         headers: new Headers({
            'Content-Type':'application/json'
         })
      })
      .map(res => res.text())
      .map(res => {
         if (res=="error" || res=="nofound"){
            this.loggedIn = false;
         } else {
            localStorage.setItem('token', res);
            this.username = userInfo.user;
            this.loggedIn = true;
         }
         return this.loggedIn;
      });
   }

   logout(): void {
      localStorage.removeItem('token');
      this.username = '';
      this.loggedIn = false;
   }

   isLoggedIn() {
      return this.loggedIn;
   }
}