import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/Auth.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {
  isLogin: boolean = true;
  ngOnInit(): void {
      this.Auth.handleEvent(false)
  }
  constructor(private Auth: AuthService ,private router : Router , private toastr: ToastrService) {}
  LoginData(login: any) {
    if (this.isLogin) {
      this.Auth.login(login.value.email,  login.value.password).subscribe({
        next: (response) => {
          this.toastr.success('Login succesfully');
          this.router.navigateByUrl("/landing");
          // this.Auth.isLogin=true
          this.Auth.handleEvent(true)
        },
        error: (errMessage) => {
          this.toastr.error(errMessage)
        },
      });
    } else {
      this.Auth.signUp(login.value.email, login.value.password).subscribe({
        next: (value) => {
          this.toastr.success("succesfully signup")
        },
        error: (errMessage) => {
          this.toastr.error(errMessage)
        },
      });
    }
  }
  SwitchedMode() {
    this.isLogin = !this.isLogin;
  }
}
