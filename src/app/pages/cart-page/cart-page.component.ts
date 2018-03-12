import { Component, OnInit } from '@angular/core';
import { CartService } from '../../providers/cart.service';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.sass']
})
export class CartPageComponent implements OnInit {
  

  constructor(public cart: CartService) { }

  ngOnInit() {
  }

  getShipping = () => {
    this.cart.shippingValue = Math.random() * (50 - 0) + 0;
  }
  

}
