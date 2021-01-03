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
    street: '',
    suite: 'string',
    city: '',
    zipcode: '',
    company: '',
    geo: 'string',
    catchphrase: 'string',
    bs: 'string'
  }

  userInfo = this.TemplateUserInfo;
  constructor() { }
  
  ngOnInit() {
  }

  onBlur(field: NgModel,elem: any) {
    console.log("field.valid...", field.valid)
    if (field.valid === false) {
      elem.className += ' field-error'
      console.log(elem.className)
    }
  }

  onSubmit(form: NgForm) {
    console.log("Form is Valid... ", form.valid)
  }

}