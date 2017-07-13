import { Injectable } from '@angular/core';

@Injectable()
export class CartService {
  cartList: any[] = [{
    item: 999
  }];
  constructor() { }

}
