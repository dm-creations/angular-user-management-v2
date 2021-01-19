import { Component, OnInit } from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';
import { UserInfo } from '../data/user-info';
import { DataService } from '../data/data.service';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})

export class UserFormComponent implements OnInit {

  TemplateUserInfo: UserInfo = {
    id: 1,
    name: '',
    username: '',
    street: '',
    suite: '',
    city: '',
    zipcode: '',
    company: '',
    geo: '',
    phone: '',
    catchphrase: '',
    bs: ''
  }  

  autoFillInfo: UserInfo = {
    id: 1,
    name: 'Benjmin Gilbert',
    username: 'BigG',
    street: 'Linus Torvalds Street',
    suite: '12B',
    city: 'Manchester',
    zipcode: 'M11 4TQ',
    company: 'AI Breakers',
    geo: '11.22323 , 88.23039',
    phone: '0800 50 50 50',
    catchphrase: 'Once an AI Breaker...',
    bs: 'Doing the thing'
  }

  userInfo : UserInfo = { ...this.TemplateUserInfo };
  autoInfo : UserInfo = { ...this.autoFillInfo };
  postError = false;
  postErrorMessage = '';
  postSuccess = false;
  postSuccessMessage = '';

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

  autoFillForm() {
    this.userInfo = this.autoFillInfo; 
  }

  onBlur(field: NgModel,elem: any) {
    // console.log("field.valid...", field.valid)
    // console.log("field.invalid...", field.invalid)
    elem.classList.remove('field-error')
    if (field.valid === false) {
      elem.classList.add('field-error')
      console.log(elem.className)
    }
  }

  onHttpError(errorResponse: any) {
    console.log('error: ', errorResponse);
    this.postError = true;
    this.postErrorMessage = errorResponse.error.errorMessage;
  }

  onSubmit(form) {
    if (form.valid) {
      this.dataService.postForm(form.value).subscribe(
        result => {
          this.postError = false;
          this.postErrorMessage = '';
          this.postSuccess = true;
          this.postSuccessMessage = 'Form Submitted! Click on Update All Users to view';

          // this.dataService.allUsers.push(result);
          console.log('success... ', result.body);
          // add response Object to existing allUsers Object
          this.dataService.runFunction(result.body);
      },
        error => console.log('error... ', error)
      );
    }
    else {
      this.postSuccess = false;
      this.postSuccessMessage = '';
      this.postError = true;
      this.postErrorMessage = "Please fix the above error(s)"
    }
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