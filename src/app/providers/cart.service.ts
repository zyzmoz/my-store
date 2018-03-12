import { Injectable } from '@angular/core';
import { CartItem } from '../models/cart-item';

@Injectable()
export class CartService {

  shippingValue : number = 0
  cartList: Array<CartItem> = [{
    id: '1',
    item: 1,
    description: 'Produto 1',
    url: 'url',
    price: 1.99,
    quantity: 2,
    picture: 'img'    
  }];
  wait = false;
  paymentDone = false;
  constructor() { }

  deleteItem(index){      
    this.cartList.splice(index,1);
  }

  addItem(obj){
    var exists = false;
    for(var i = 0; i < this.cartList.length; i++){
      if (this.cartList[i].id == obj.id){
        this.cartList[i].quantity += 1;
        exists = true;
        break;
      }
    }
    if (!exists)
      this.cartList.push(obj);
  }
  
  totalize(){
    var total = 0;
    for (var i = 0; i < this.cartList.length; i++){
      total = total + (this.cartList[i].quantity * this.cartList[i].price);
    };
    return total;
  }

  checkout(){
    this.wait = true;
    setTimeout(() => {
      this.cartList = [];
      this.wait = false;
      this.shippingValue = 0;
    },3000);    

  }

}
