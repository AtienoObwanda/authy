import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/service/user.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
  providers: [UserService]

})
export class SignupComponent implements OnInit {
  register:any;
  // constructor(private http: HttpClient, private router: Router) { }

  constructor(private userService: UserService, private router: Router) {}
  ngOnInit() {
    this.register = {
      username:'',
      email:'',
      password:'',

    };
 
}

userRegister(){
  // console.log(this.register)

  this.userService.newUserRegister(this.register).subscribe(
    response => {
      alert('User  ' + this.register.username + ' has been registered successfully!')
      this.router.navigate(["login"])
    },
    error => console.log('error', error)
  );

}



}