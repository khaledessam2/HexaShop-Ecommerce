import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-tracking-order',
  standalone: false,
  templateUrl: './tracking-order.component.html',
  styleUrl: './tracking-order.component.css'
})
export class TrackingOrderComponent implements OnInit {
  orderIsSubmitted:boolean=false
  constructor(private Http:HttpClient , private toastr: ToastrService , private router:Router){}
  FormData:any;
  ngOnInit(): void {
    this.FormData=new FormGroup({
      country: new FormControl(null , Validators.required),
      fullName: new FormControl(null , Validators.required),
      mobileNumber:new FormControl(null , Validators.required),
      street:new FormControl(null , Validators.required),
      city:new FormControl(null , Validators.required),
      Payment:new FormControl(null , Validators.required)
    })
  }
  FormSubmitted(){
    this.Http.post("https://depi-frontend-default-rtdb.firebaseio.com/orders.json", this.FormData.value).subscribe({
      next:(value)=> {
        this.router.navigateByUrl('/landing')
        this.toastr.success('Order is Submitted');
      },
    })
  }
}
