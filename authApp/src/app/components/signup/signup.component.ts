import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  register:any;


  ngOnInit() {
    this.register = {
      username:'',
      email:'',
      password:'',

    };
 
}

userRegister(){
  
}

// signUp(){
//   this.http.post<any>("http://localhost:3000/signupUsersList",this.signUpForm.value)
//   .subscribe(res=>{
//     alert('SIGNIN SUCCESFUL');
//     this.signUpForm.reset()
//     this.router.navigate(["login"])
//   },err=>{
//     alert("Something went wrong")
//   })
// }
}