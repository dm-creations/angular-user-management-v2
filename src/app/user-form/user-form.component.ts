import { Component, OnInit } from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';
import { UserInfo } from '../data/user-info';
import { DataService } from '../data/data.service'

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {

  TemplateUserInfo: UserInfo = {
    id: 1,
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
  constructor(private dataService: DataService) {}
  
  testPost = {
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

  ngOnInit() {
  }

  onBlur(field: NgModel,elem: any) {
    console.log("field.valid...", field.valid)
    if (field.valid === false) {
      elem.className += ' field-error'
      console.log(elem.className)
    }
  }

  onSubmit() {
    console.log("form")
    this.dataService.postForm(this.userInfo).subscribe(
      result => console.log('success... ', result),
      error => console.log('error... ', error)
    );
  }

  onSubmit2(form: NgForm) {
    console.log("Form is Valid... ", form.valid);
    this.dataService.postForm(this.userInfo).subscribe(
      result => console.log('success... ', result),
      error => console.log('error... ', error)
    );
  }

}