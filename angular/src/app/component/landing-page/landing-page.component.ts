import { Component, OnInit } from '@angular/core';
import { categoury } from '../../services/categoury.service';

@Component({
  selector: 'app-landing-page',
  standalone: false,
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.css'
})
export class LandingPageComponent implements OnInit {
  constructor(private clothesService:categoury){}
  loadData:boolean=false
  mensClothes:any=[]
  womansClothes:any=[]
  kidsClothes:any=[]
  ngOnInit(): void {
    this.clothesService.getProducts().subscribe({
      next:(response)=> {
        this.loadData=true
        response.forEach((e)=>{
          if(e.category.includes("mens")){
            this.mensClothes.push(e)
          }else if(e.category.includes("womans")){
            this.womansClothes.push(e)
          }else if(e.category.includes("kids")){
            this.kidsClothes.push(e)
          }
        })
      },
    })
    this.loadData=false

    setTimeout(() => {
      const fromLeftElements = document.querySelectorAll('.from-left');
      const fromRightElements = document.querySelectorAll('.from-right');

      fromLeftElements.forEach(el => el.classList.add('show'));
      fromRightElements.forEach(el => el.classList.add('show'));
    }, 100);
  }
}
