import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
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
    CartbarComponent
  ],
  imports: [
    BrowserModule,
    routing
  ],
  providers: [MenuService],
  bootstrap: [AppComponent]
})
export class AppModule { }
