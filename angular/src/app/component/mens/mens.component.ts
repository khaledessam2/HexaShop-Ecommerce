import { Component, OnInit } from '@angular/core';
import { categoury } from '../../services/categoury.service';

@Component({
  selector: 'app-mens',
  standalone: false,
  templateUrl: './mens.component.html',
  styleUrl: './mens.component.css'
})
export class MensComponent implements OnInit {
  constructor(private catgoury:categoury){}
  loadData:boolean=false
  mens: any[] = [];
  ngOnInit(): void {
    this.catgoury.getProducts().subscribe({
      next:(response)=> {
        this.loadData=true
        response.forEach((e)=>{
          if(e.category.includes("mens")){
            this.mens.push(e)
            console.log(this.mens)
          }
        })
      },
    })
    this.loadData=false
  }
}
