import { Component } from '@angular/core';
import { AuthService } from '../../services/Auth.service';

@Component({
  selector: 'app-navbar',
  standalone: false,
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  constructor(private Auth:AuthService){}
  HandleEvent(){
    // this.Auth.isLogin=false
    this.Auth.handleEvent(false)
  }
}
