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
  msg : boolean = false;

  

  constructor(public product: ProductService, private cart: CartService) { 
    
  }

  ngOnInit() {
  }

  showDetails(id){
    
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
    this.msg = true;
    this.cart.addItem(item);
    setTimeout(() =>{
      this.msg = false;
    },3000);
    

  }

}
