import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistrationComponent } from './common/registration/registration.component';
import { LoginComponent } from './common/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { ContactComponent } from './common/contact/contact.component';
import { ProductsComponent } from './pages/products/products.component';
import { TestimonialComponent } from './pages/testimonial/testimonial.component';
import { AboutComponent } from './pages/about/about.component';
import { ViewproductsComponent } from './pages/viewproducts/viewproducts.component';
import { ShirtsComponent } from './categorys/shirts/shirts.component';
import { KurtaComponent } from './categorys/kurta/kurta.component';
import { PantsComponent } from './categorys/pants/pants.component';
import { CartComponent } from './pages/cart/cart.component';
import { ViewkurtaComponent } from './pages/viewkurta/viewkurta.component';
import { ViewpantsComponent } from './pages/viewpants/viewpants.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegistrationComponent },
  { path: 'about', component: AboutComponent },
  { path: 'details', component: ProfileComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'testimonials', component: TestimonialComponent },
  { path: 'product', component: ProductsComponent },
  { path: 'Viewproduct', component: ViewproductsComponent },
  { path: 'Viewpants', component: ViewpantsComponent },
  { path: 'Viewkurta', component: ViewkurtaComponent },
  { path: 'shirts', component: ShirtsComponent },
  { path: 'kurta', component: KurtaComponent },
  { path: 'pants', component: PantsComponent },

  { path: 'cart', component: CartComponent },
  { path: '**', redirectTo: 'app' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
