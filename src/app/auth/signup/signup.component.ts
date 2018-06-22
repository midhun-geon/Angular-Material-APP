import { Component, OnInit } from '@angular/core';
import { Form } from '@angular/forms';
import { AuthService } from '../auth.service';
import { NgForm } from '@angular/forms/src/directives/ng_form';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
maxDate;
  constructor(private authSerive:AuthService) { }

  ngOnInit() {
    this.maxDate=new Date();
    this.maxDate.setFullYear(this.maxDate.getFullYear()-18);
  }
  onSubmit(form:NgForm){
    console.log("in service")
    this.authSerive.registerUser({
     email:form.value.email,
     password:form.value.password
    });
  }
}
