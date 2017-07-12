import { Injectable } from '@angular/core';
import * as $ from 'jquery';

@Injectable()
export class MenuService {
  opened: boolean = false;

  options: any[] = [
    {
      icon: 'fa fa-home',
      text: 'Home',
      router: '/'
    },
    {
      icon: 'fa fa-shopping-bag',
      text: 'Products',
      router: '/products'
    }
  ]

  constructor() { }

  open() {
    this.opened = true;
    console.log('open');
    
  }

  close() {
    this.opened = false;
    console.log('close');
    
  }


}
