import { BrowserModule } from '@angular/platform-browser';
 import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { routing } from './app.router';
import { AppComponent } from './app.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { MenuComponent } from './components/menu/menu.component';
import { LogoComponent } from './components/logo/logo.component';
import { SearchbarComponent } from './components/searchbar/searchbar.component';
import { BannerComponent } from './components/banner/banner.component';
import { HeaderComponent } from './components/header/header.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { FooterComponent } from './components/footer/footer.component';
import { ProductsPageComponent } from './pages/products-page/products-page.component';
import { ProductPageComponent } from './pages/product-page/product-page.component';
import { Error404PageComponent } from './pages/error-404-page/error-404-page.component';
import { CartbarComponent } from './components/cartbar/cartbar.component';

import { MenuService } from './providers/menu.service';
import { CartService } from './providers/cart.service';
import { ProductService } from './providers/product.service';
import { CartPageComponent } from './pages/cart-page/cart-page.component';

/** Firabase */
import * as firebase from 'firebase';
firebase.initializeApp(
  {
    apiKey: "AIzaSyCowZ59Ms9TjrDru1Tz40e8fh2KtlHZlFo",
    authDomain: "goal-coach-953d0.firebaseapp.com",
    databaseURL: "https://goal-coach-953d0.firebaseio.com",
    projectId: "goal-coach-953d0",
    storageBucket: "goal-coach-953d0.appspot.com",
    messagingSenderId: "41868907638"
  }
);

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    MenuComponent,
    LogoComponent,
    SearchbarComponent,
    BannerComponent,
    HeaderComponent,
    ProductListComponent,
    ProductCardComponent,
    FooterComponent,
    ProductsPageComponent,
    ProductPageComponent,
    Error404PageComponent,
    CartbarComponent,
    CartPageComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    
    routing
  ],
  providers: [MenuService, CartService, ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
