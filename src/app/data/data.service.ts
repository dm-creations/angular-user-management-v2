import { Injectable } from '@angular/core';
import { UserInfo } from './user-info';
import { JsonP } from './jsonplaceholder-interface';
import { Observable, of } from 'rxjs'
import { HttpClient } from '@angular/common/http';

@Injectable({providedIn: 'root'})
export class DataService {

  constructor(private http: HttpClient) { }

    postForm(userInfo: UserInfo): Observable<any> {
    // console.log(userInfo.name)
    // return of(userInfo)

    var body = {
  method: 'POST',
  body: JSON.stringify({
    title: 'foo',
    body: 'bar',
    userId: 1,
  }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
}
    
    return this.http.post('http://jsonplaceholder.typicode.com/users', body)

    // return this.http.post('https://putsreq.com/D35NMtlNgaEzeG4dXX0x', userInfo)
  }

  postForm2(userInfo: UserInfo): Observable<any> {
    // console.log(userInfo.name)
    // return of(userInfo)
    // return this.http.post('http://jsonplaceholder.typicode.com/users', userInfo)

    return this.http.post('https://putsreq.com/D35NMtlNgaEzeG4dXX0x', userInfo)
  }

}