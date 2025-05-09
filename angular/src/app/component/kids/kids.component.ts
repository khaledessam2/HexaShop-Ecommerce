import { Component, OnInit } from '@angular/core';
import { categoury } from '../../services/categoury.service';

@Component({
  selector: 'app-kids',
  standalone: false,
  templateUrl: './kids.component.html',
  styleUrl: './kids.component.css'
})
export class KidsComponent implements OnInit {
    constructor(private catgoury:categoury){}
    loadData:boolean=false
    kids: any[] = [];
    ngOnInit(): void {
      this.catgoury.getProducts().subscribe({
        next:(response)=> {
          this.loadData=true
          response.filter((e)=>{
            if(e.category.includes("kids")){
              this.kids.push(e)
            }
          })
        },
      })
      this.loadData=false
    }
}
