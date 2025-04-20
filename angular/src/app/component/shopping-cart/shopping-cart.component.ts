import { Component } from '@angular/core';

@Component({
  selector: 'app-shopping-cart',
  standalone: false,
  templateUrl: './shopping-cart.component.html',
  styleUrl: './shopping-cart.component.css'
})
export class ShoppingCartComponent {
  thead:any[]=["Name", "Price" , "Quantity", "Color"]
  tbody:any[]=[
    {img:"assets/325a2b80a5e1b44c4ba437a265b79698.jpg", name:"Classic Spring", price:"120" , Quantity:"0" , color:"White"},
    {img:"assets/07aa4deabbe11858c7e2aca86957db04.jpg", name:"Classic Spring", price:"120" , Quantity:"0" , color:"Red"},
    {img:"assets/325a2b80a5e1b44c4ba437a265b79698.jpg", name:"Classic Spring", price:"120" , Quantity:"0" , color:"White"}
  ]
  PayableAmount : number =  0  ;
  Shipping: number = 10 ;
  totalOrder:number = this.PayableAmount + this.Shipping
  minus(index:number){
    if(this.tbody[index].Quantity > 0){
      this.tbody[index].Quantity -- ;
      this.PayableAmount = this.PayableAmount - +this.tbody[index].price
      this.totalOrder = this.PayableAmount + this.Shipping
    }

  }
  plus(index:number){
    this.tbody[index].Quantity ++ ;
    this.PayableAmount = this.PayableAmount + +this.tbody[index].price
    this.totalOrder = this.PayableAmount + this.Shipping
  }

}
