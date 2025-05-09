import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { categoury } from '../../services/categoury.service';

@Component({
  selector: 'app-single-product',
  standalone: false,
  templateUrl: './single-product.component.html',
  styleUrl: './single-product.component.css'
})
export class SingleProductComponent implements OnInit {
  constructor(
    private ActivateRouter: ActivatedRoute,
    private clothesServises: categoury
  ) {}
  loadData:boolean=false
  SingleProductId: any;
  product: any = {};
  otherProducts: any[] = [];
  ngOnInit(): void {
    this.ActivateRouter.paramMap.subscribe({
      next: (value) => {
        this.SingleProductId = value.get('id');
        this.clothesServises.getProducts().subscribe({
          next: (value) => {
            this.loadData=true
            value.forEach((item) => {
              if (item.id == this.SingleProductId) {
                this.product = item;
              }
            });
            this.otherProducts = value.filter((item) => {
              return (
                item.id != this.SingleProductId &&
                (
                  (item.category.includes('mens') && this.product.category === 'mens') ||
                  (item.category.includes('womans') && this.product.category === 'womans') ||
                  (item.category.includes('kids') && this.product.category === 'kids')
                )
              );
            });
          },
        });
        this.loadData=false
      },
    });
  }

  emitProduct(product:any){
    this.clothesServises.emitProduct(product);
  }
}
