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

  userInfo : UserInfo = { ...this.TemplateUserInfo };
  postError = false;
  postErrorMessage = '';

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

 constructor(private dataService: DataService) {}

  ngOnInit() {
  }

  onBlur(field: NgModel,elem: any) {
    console.log("field.valid...", field.valid)
    if (field.valid === false) {
      elem.className += ' field-error'
      console.log(elem.className)
    }
  }

  onHttpError(errorResponse: any) {
    console.log('error: ', errorResponse);
    this.postError = true;
    this.postErrorMessage = errorResponse.error.errorMessage;
  }

  onSubmit(form) {
    this.dataService.postForm(form.value).subscribe(
      result => console.log('success... ', result),
      error => console.log('error... ', error)
    );
  }

  onSubmit2(form: NgForm) {
    console.log("Form is Valid yeah... ", form.valid);

    if (form.valid) {
      this.dataService.postForm2(this.userInfo).subscribe(
      result => console.log('success... ', result),
      error => this.onHttpError(error)
      );
    }
    else {
      this.postError = true;
      this.postErrorMessage = "Please fix the above error(s)"
    }
  }
}