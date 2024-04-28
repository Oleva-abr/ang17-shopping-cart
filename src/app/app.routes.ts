import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductPageComponent } from './product-page/product-page.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { CartComponent } from './cart/cart.component';


export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'product-page/:name', component: ProductPageComponent },
  { path: 'product-detail/:name/:id', component: ProductDetailsComponent },
  { path: 'cart', component: CartComponent },
];
