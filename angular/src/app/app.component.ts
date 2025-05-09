import { Component, OnInit } from '@angular/core';
import { AuthService } from './services/Auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit  {
  constructor(public Auth:AuthService){}
  login:boolean=false
  ngOnInit(): void {
    this.Auth.isLogin.subscribe({
      next:(value:any)=>{
          localStorage.setItem('login', value);
          this.login=localStorage.getItem('login') === 'true'
        }
      })
      this.login=localStorage.getItem('login') === 'true'
      console.log(this.login)
  }
}
