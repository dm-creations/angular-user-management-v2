import { Component, OnInit } from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';
import { UserInfo } from '../data/user-info';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {

  TemplateUserInfo: UserInfo = {
    name: '',
    username: 'OhDear',
    street: 'string',
    suite: 'string',
    city: 'string',
    zipcode: 'string',
    geo: 'string',
    catchphrase: 'string',
    bs: 'string'
  }

  userInfo = this.TemplateUserInfo;
  constructor() { }
  
  ngOnInit() {
  }

  onBlur(field: NgModel) {
    console.log("field.valid...", field.valid)
    if (field.valid === false) {
      console.log(this.userInfo)
    }
  }

  onSubmit(form: NgForm) {
    console.log("Form is Valid... ", form.valid)
  }

}