import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShoppingCartComponent } from './component/shopping-cart/shopping-cart.component';
import { FAQSComponent } from './component/faqs/faqs.component';
import { TrackingOrderComponent } from './component/shopping-cart/tracking-order/tracking-order.component';
import { HomeComponent } from './component/home/home.component';
import { LandingPageComponent } from './component/landing-page/landing-page.component';
import { MensComponent } from './component/mens/mens.component';
import { WomansComponent } from './component/womans/womans.component';
import { KidsComponent } from './component/kids/kids.component';

const routes: Routes = [
  {path:'' , redirectTo:'/landing' , pathMatch:'full'},
  {path:'landing' , component:LandingPageComponent},
  {path:'home' , component:HomeComponent},
  {path:'mens' , component:MensComponent},
  {path:'womans' , component:WomansComponent},
  {path:'kids' , component:KidsComponent},
  {path:"shopping-cart", component:ShoppingCartComponent},
  {path:"track-order", component:TrackingOrderComponent},
  {path:"faqs", component:FAQSComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
