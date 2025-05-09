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
import { AboutUsComponent } from './component/about-us/about-us.component';
import { ContactUsComponent } from './component/contact-us/contact-us.component';
import { SingleProductComponent } from './component/single-product/single-product.component';
import { LoginComponent } from './component/login/login.component';

const routes: Routes = [
  {path:'' , redirectTo:'/login' , pathMatch:'full'},
  {path:'landing' , component:LandingPageComponent},
  {path:'home' , component:HomeComponent},
  {path:'mens' , component:MensComponent},
  {path:'womans' , component:WomansComponent},
  {path:'kids' , component:KidsComponent},
  {path:'product/:id' , component:SingleProductComponent},
  {path:"shopping-cart", component:ShoppingCartComponent},
  {path:"track-order", component:TrackingOrderComponent},
  {path:"faqs", component:FAQSComponent},
  {path:"about-us", component:AboutUsComponent},
  {path:"contact-us", component:ContactUsComponent},
  {path:"login", component:LoginComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
