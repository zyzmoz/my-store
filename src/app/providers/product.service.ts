import { Injectable } from '@angular/core';
import { Product } from '../models/product';
import * as firebase from 'firebase';

@Injectable()
export class ProductService {

  productList: Array<Product>;
    // {
    //   id: '5',
    //   description: 'Produto5',
    //   details: 'Apenas um produto',
    //   price: 2.98,
    //   picture: 'http://bulma.io/images/placeholders/1280x960.png',
    //   url: 'string'
    // }

  

  constructor() {
    this.list(null).then(res => { 
      const list: any = res;    
      this.productList = list;
      console.log(res);      
    });   
  }

  list = (params) => {
    return new Promise((resolve, reject) => {
      const ref = firebase.database().ref('products');
      ref.on('value', snap => {
        const products: any = snap;
        let list = [];
        products.forEach(product => {          
          list.push({ id: product.key, ...product.val()});
        })
        resolve(list);
      });
    });
  }

  getProduct = (key) => {
    return new Promise((resolve, reject) => {
      const ref = firebase.database().ref('/products/' + key).once('value').then((snap) => {        
        resolve({id: snap.key, ...snap.val()});        
      });      
    })
  }

  add = (obj) => {
  
  }

  update = (obj) => {

  }

  delete = (key) => {

  }


}
