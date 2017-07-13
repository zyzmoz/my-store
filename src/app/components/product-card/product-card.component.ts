import { Component, OnInit,ViewContainerRef } from '@angular/core';
import { ProductService } from '../../providers/product.service';
import { CartService } from '../../providers/cart.service';

import { CartItem } from '../../models/cart-item';



@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.sass']
})
export class ProductCardComponent implements OnInit {

  

  constructor(public product: ProductService, private cart: CartService) { 
    
  }

  ngOnInit() {
  }

  buyItem(obj){
    let item: CartItem = {
      id: obj.id,
      item: this.cart.cartList.length + 1,
      description: obj.description,
      url: obj.url,
      price: obj.price,
      quantity: 1,       
      picture: obj.picture
    };

    this.cart.addItem(item);
    

  }

}
