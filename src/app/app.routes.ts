import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductPageComponent } from './product-page/product-page.component';


export const routes: Routes = [
  {
    path: '', component: HomeComponent
  },
  {
    path: 'product-page/:name', component: ProductPageComponent
  }
];
