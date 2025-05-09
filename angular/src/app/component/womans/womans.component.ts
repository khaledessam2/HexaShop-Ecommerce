import { Component } from '@angular/core';
import { categoury } from '../../services/categoury.service';

@Component({
  selector: 'app-womans',
  standalone: false,
  templateUrl: './womans.component.html',
  styleUrl: './womans.component.css'
})
export class WomansComponent {
  constructor(private catgoury:categoury){}
  loadData:boolean=false
  womans: any[] = [];
  ngOnInit(): void {
      this.catgoury.getProducts().subscribe({
        next:(response)=> {
          this.loadData=true
          response.forEach((e)=>{
            if(e.category.includes("womans")){
              this.womans.push(e)
            }
          })
        },
      })
      this.loadData=false ;
    }
}
