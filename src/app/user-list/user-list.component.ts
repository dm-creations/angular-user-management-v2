import { Component, OnInit } from '@angular/core';
import { UserInfo } from '../data/user-info';
import { DataService } from '../data/data.service'

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})

export class UserListComponent implements OnInit{

// We make an object that is filled by the jsonplaceholder website 
// The type needs to be matching the export interface UserInfo
// Use the DataService to call the information into the object

  allUsers = this.dataService.allUsers;

  constructor(private dataService: DataService) {}

  getUsers() {
    this.dataService.getUsers()
      // .subscribe((data) => console.log(data) )
      .subscribe((data) => this.allUsers = data)
  }

  ngOnInit() {
  }

  delete(user) {
    // return delete object
    // return updated object minus deleted object
    return
  }
  editUser() {
    // return put object
    // return updated object with edited object
    return
  }

}