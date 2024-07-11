import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistrationComponent } from './common/registration/registration.component';
import { ContactComponent } from './common/contact/contact.component';
import { NavbarComponent } from './common/navbar/navbar.component';
import { FooterComponent } from './common/footer/footer.component';
import { LoginComponent } from './common/login/login.component';
import { HomeComponent } from './pages/home/home.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ProfileComponent } from './pages/profile/profile.component';
import { ProductsComponent } from './pages/products/products.component';
import { TestimonialComponent } from './pages/testimonial/testimonial.component';
import { AboutComponent } from './pages/about/about.component';
import { ViewproductsComponent } from './pages/viewproducts/viewproducts.component';
import { ShirtsComponent } from './categorys/shirts/shirts.component';
import { KurtaComponent } from './categorys/kurta/kurta.component';
import { PantsComponent } from './categorys/pants/pants.component';
import { FrontComponent } from './pages/front/front.component';
import { CartComponent } from './pages/cart/cart.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { ViewkurtaComponent } from './pages/viewkurta/viewkurta.component';
import { ViewpantsComponent } from './pages/viewpants/viewpants.component';

@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    ContactComponent,
    NavbarComponent,
    FooterComponent,
    LoginComponent,
    HomeComponent,
    ProfileComponent,
    ProductsComponent,
    TestimonialComponent,
    AboutComponent,
    ViewproductsComponent,
    ShirtsComponent,
    KurtaComponent,
    PantsComponent,
    FrontComponent,
    CartComponent,
    ViewkurtaComponent,
    ViewpantsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgxPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
