import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

  disableLogin: boolean = false;
  loginForm: FormGroup;
  signupForm: FormGroup;
  loginError : string | null;
  signupError : string | null;

  constructor(private authService: AuthService, private route: Router) { }

  ngOnInit(): void {
    if(!!localStorage.getItem('auth')){
      this.route.navigate(['anime']);
    }
    this.loginForm = new FormGroup({
      "lemail": new FormControl(null, [Validators.required, Validators.email]),
      "lpass": new FormControl(null, Validators.required) 
    });
    this.signupForm = new FormGroup({
      "semail": new FormControl(null, [Validators.required, Validators.email]),
      "fname" :new FormControl(null, Validators.required),
      "spass": new FormControl(null, Validators.required)
    })
  }

  displayChange(selector: string){
    if(selector == "login"){
      this.disableLogin = false;
    }
    else {
      this.disableLogin = true;
    }
  }

  onSubmitLogin(){
    if(this.loginForm.valid){
      this.authService.login(this.loginForm.value.lemail, this.loginForm.value.lpass)
      .subscribe(
        (responseData) => {
          this.route.navigate(['/anime']);
        },
        (errorData) => {
          this.loginError = errorData;
        }
      )
    }
    else{
      this.loginError = "Please enter valid credentials";
    }
  }
  onSubmitSignup(){
    if(this.signupForm.valid){
      this.authService.signUp(this.signupForm.value.semail, this.signupForm.value.spass, this.signupForm.value.fname)
      .subscribe(
        (responseData) => {
          this.route.navigate(['/anime']);
        },
        (errorData) => {
          this.signupError = errorData;
        }
      )
    }
    else{
      this.signupError = "Please enter valid credetials";
    }
  }

}
