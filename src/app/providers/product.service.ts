import { Injectable } from '@angular/core';
import { Product } from '../models/product';
@Injectable()
export class ProductService {

  productList: Array<Product> = [
    {
      id: '1',
      description: 'Produto',
      details: 'Apenas um produto',
      price: 2.98,
      picture: 'http://bulma.io/images/placeholders/1280x960.png',
      url: 'string'
    },
    {
      id: '2',
      description: 'Produto2',
      details: 'Apenas um produto',
      price: 2.98,
      picture: 'http://bulma.io/images/placeholders/1280x960.png',
      url: 'string'
    },
    {
      id: '3',
      description: 'Produto3',
      details: 'Apenas um produto',
      price: 2.98,
      picture: 'http://bulma.io/images/placeholders/1280x960.png',
      url: 'string'
    },
    {
      id: '4',
      description: 'Produto4',
      details: 'Apenas um produto',
      price: 2.98,
      picture: 'http://bulma.io/images/placeholders/1280x960.png',
      url: 'string'
    },
    {
      id: '5',
      description: 'Produto5',
      details: 'Apenas um produto',
      price: 2.98,
      picture: 'http://bulma.io/images/placeholders/1280x960.png',
      url: 'string'
    }

  ];

  constructor() { }

}
