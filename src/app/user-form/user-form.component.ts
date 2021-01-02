import { Component, OnInit } from '@angular/core';
import { Pipe, PipeTransform } from '@angular/core';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {

  formIn = {}
  constructor() { }
  
  ngOnInit() {
  }

  runForm() {
    console.log(this.formIn)
  }

}