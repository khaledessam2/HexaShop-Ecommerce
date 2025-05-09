import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BehaviorSubject, map } from "rxjs";

@Injectable({
  providedIn:'root'
})
export class categoury{
  constructor(private Http:HttpClient){}
  product = new BehaviorSubject<any>(null);
  baseUrl:string='https://depi-frontend-default-rtdb.firebaseio.com/';
  products:any[]=[] ;
  getProducts(){
    return this.Http.get(`${this.baseUrl}clothes.json`).pipe(map((data:any)=>{
      // tranform data
      for(let product in data){
        if(data.hasOwnProperty(product)){
          this.products.push({...data[product]})
        }
      }
      return this.products
    }))
  }
  emitProduct(data:any){
    this.product.next(data)
  }
}
