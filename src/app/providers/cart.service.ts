import { Injectable } from '@angular/core';
import { CartItem } from '../models/cart-item';
import * as pagseguro from 'pagseguro';

@Injectable()
export class CartService {
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
    let pag = new pagseguro({
      email: 'suporte@lojamodelo.com.br',
      token: '57BE455F4EC148E5A54D9BB91C5AC12C'
    });
    let obj = {
      bornDate: '18/09/1991',      
      areaCode: '19',
      number: '988033320',      
      email: 'zyzmoz@sandbox.pagseguro.com.br',
      document: {
        type: 'CPF',
        value: '37126058896'
      },
      name: 'Daniel Cunha',
      ip: '1.1.1.1'
    }
    pag.setSender(obj);
    pag.addItens(this.cartList);
    /**address: {
                        street: obj.street,
                        number: obj.number,
                        complement: obj.complement,
                        district: obj.district,
                        city: obj.city,
                        state: obj.state,
                        country: obj.country,
                        postalCode: obj.postalCode
                    },
                    type: 1,
                    cost: obj.cost, */
    pag.setShippmentAddress({street: 'Rua Maria M de Souza Campos', number: 58, complement: '',
                             district: 'Jd Alto das Araras', city: 'Araras', state: 'SP', country: 'Brasil',
                             postalCode: '13604120' });
    pag.setPaymentMethod('boleto', {});
    pag.checkout((err, res) => {
      if (err){
        console.log(err);
        
      } else {
        console.log(res);       
      }
      this.wait = false;
      this.cartList.splice(0,this.cartList.length);
      this.paymentDone = true; 
      setTimeout(() =>{
        this.paymentDone = false;
        console.log('False');
        
      },3000);     

    });

    
    

  }

}
