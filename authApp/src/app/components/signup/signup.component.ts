import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/service/user.service';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
  providers: [UserService]

})
export class SignupComponent implements OnInit {
  register:any;

  constructor(private userService: UserService){}
  ngOnInit() {
    this.register = {
      username:'',
      email:'',
      password:'',

    };
 
}

userRegister(){
  // this.userService.register().subscribe

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