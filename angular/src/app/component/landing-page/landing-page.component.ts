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
  mensClothes:any=[]
  womansClothes:any=[]
  kidsClothes:any=[]
  ngOnInit(): void {
    this.clothesService.clothes.filter((e)=>{
      if(e.categoury.includes("mens")){
        this.mensClothes.push(e)
      }else if(e.categoury.includes("womans")){
        this.womansClothes.push(e)
      }else{
        this.kidsClothes.push(e)
      }
    })
    console.log(this.mensClothes)
  }
}
