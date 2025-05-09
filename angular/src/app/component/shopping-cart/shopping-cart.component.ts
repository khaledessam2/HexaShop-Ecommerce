import { AfterViewInit, Component, OnChanges, OnInit } from '@angular/core';
import { categoury } from '../../services/categoury.service';

@Component({
  selector: 'app-shopping-cart',
  standalone: false,
  templateUrl: './shopping-cart.component.html',
  styleUrl: './shopping-cart.component.css'
})
export class ShoppingCartComponent implements OnInit {
  constructor(private services: categoury) {}

  thead: any[] = ["Name", "Price", "Quantity", "Color" , "Action"];
  tbody: any[] = [];

  PayableAmount: number = 0;
  Shipping: number = 10;
  totalOrder: number = 0;

  ngOnInit(): void {
    // ✅ تحميل السلة من localStorage
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
      this.tbody = JSON.parse(savedCart);
      this.updateTotal();
    }

    this.services.product.subscribe({
      next: (value: any) => {
        if (value) {
          this.services.getProducts().subscribe({
            next: (response) => {
              const selected = response.find((e: any) => e.id === value.id);
              if (selected) {
                let obj = JSON.parse(JSON.stringify(selected));
                obj.color = "white";
                obj.Quantity = 0;

                //  إزالة القديم بنفس ID لو موجود
                this.tbody = this.tbody.filter(p => p.id !== obj.id);
                this.tbody = [...this.tbody, obj];

                //  حفظ في localStorage
                localStorage.setItem('cart', JSON.stringify(this.tbody));
              }
            }
          });
        }
      }
    });
  }

  minus(index: number) {
    if (this.tbody[index].Quantity > 0) {
      this.tbody[index].Quantity--;
      this.updateTotal();
      this.saveCart();
    }
  }

  plus(index: number) {
    this.tbody[index].Quantity++;
    this.updateTotal();
    this.saveCart();
  }

  updateTotal() {
    this.PayableAmount = this.tbody.reduce((sum, item) => {
      return sum + (item.Quantity * +item.price);
    }, 0);
    this.totalOrder = this.PayableAmount + this.Shipping;
  }

  saveCart() {
    localStorage.setItem('cart', JSON.stringify(this.tbody));
  }

  DeleteProduct(index:number){
  this.tbody.splice(index, 1);
  localStorage.setItem('cart', JSON.stringify(this.tbody));
  this.updateTotal();
  }

}
