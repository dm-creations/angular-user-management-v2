import { Injectable } from '@angular/core';
import { UserInfo } from './user-info';
import { Observable } from 'rxjs'
import { HttpClient } from '@angular/common/http';

@Injectable({providedIn: 'root'})
export class DataService {

  // Public Properties that the Service shares
  allUsers

  // Needs to be form object added
  updatedUsers = false;

  constructor(private http: HttpClient) { }

    runFunction(body) { 
      console.log('run function');
      this.allUsers = body;
      console.log(this.allUsers);

    }
    getUsers() {
      // if (this.updatedUsers != false) {
      //   return this.updatedUsers;
      // }
      // else {
        return this.http.get("https://jsonplaceholder.typicode.com/users")
      // }
    }
    updateUsers(data) {
      this.allUsers = data
    }
    postForm(userInfo): Observable<any> {

    // The format of POST that JSONPlaceholder expects to see
    let response = {
      method: 'POST',
      body: userInfo,
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      }
    }

    return this.http.post('https://jsonplaceholder.typicode.com/users', response)

    // return this.http.post('https://putsreq.com/D35NMtlNgaEzeG4dXX0x', userInfo)
  }

  postForm2(userInfo: UserInfo): Observable<any> {
    // console.log(userInfo.name)
    // return of(userInfo)
    // return this.http.post('http://jsonplaceholder.typicode.com/users', userInfo)

    return this.http.post('https://putsreq.com/D35NMtlNgaEzeG4dXX0x', userInfo)
  }

}