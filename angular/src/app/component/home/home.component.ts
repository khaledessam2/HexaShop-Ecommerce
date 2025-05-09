import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{
  ngOnInit(): void {

    setTimeout(() => {
      const fromLeftElements = document.querySelectorAll('.from-left');
      const fromRightElements = document.querySelectorAll('.from-right');

      fromLeftElements.forEach(el => el.classList.add('show'));
      fromRightElements.forEach(el => el.classList.add('show'));
    }, 100);
    
  }
}
