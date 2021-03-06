import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CartPageComponent } from './pages/cart-page/cart-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ProductsPageComponent } from './pages/products-page/products-page.component';
import { ProductPageComponent } from './pages/product-page/product-page.component';
import { Error404PageComponent } from './pages/error-404-page/error-404-page.component';
import * as firebase from 'firebase';

let routes: Routes = [
  {
    path: '',
    component: HomePageComponent
  },
  {
    path: 'product/:key',
    component: ProductPageComponent
  },
  {
    path: 'products',
    component: ProductsPageComponent
  },
  {
    path: 'cart',
    component: CartPageComponent
  },
  {
    path: '**',
    component: Error404PageComponent,
  }
  
];




export const routing: ModuleWithProviders = RouterModule.forRoot(routes);