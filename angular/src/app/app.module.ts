import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShoppingCartComponent } from './component/shopping-cart/shopping-cart.component';
import { FAQSComponent } from './component/faqs/faqs.component';
import { TrackingOrderComponent } from './component/shopping-cart/tracking-order/tracking-order.component';
import { HomeComponent } from './component/home/home.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { LandingPageComponent } from './component/landing-page/landing-page.component';
import { MensComponent } from './component/mens/mens.component';
import { WomansComponent } from './component/womans/womans.component';
import { KidsComponent } from './component/kids/kids.component';
import { MatIconModule } from '@angular/material/icon';
import { FooterComponent } from './component/footer/footer.component';
import { CardComponent } from './component/card/card.component';
import { provideHttpClient } from '@angular/common/http';
import { AboutUsComponent } from './component/about-us/about-us.component';
import { ContactUsComponent } from './component/contact-us/contact-us.component';
import { SingleProductComponent } from './component/single-product/single-product.component';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { LoginComponent } from './component/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    ShoppingCartComponent,
    FAQSComponent,
    TrackingOrderComponent,
    HomeComponent,
    NavbarComponent,
    LandingPageComponent,
    MensComponent, 
    WomansComponent,
    KidsComponent,
    FooterComponent,
    CardComponent,
    AboutUsComponent,
    ContactUsComponent,
    SingleProductComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatIconModule ,
    MatProgressSpinnerModule,
    FormsModule ,
    ToastrModule.forRoot(),
    BrowserAnimationsModule,
    ReactiveFormsModule
  ],
  providers: [provideHttpClient()],
  bootstrap: [AppComponent]
})
export class AppModule { }
