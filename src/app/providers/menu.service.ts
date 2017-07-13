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
    $(".menu").removeClass('is-hidden slideOutRight');
    $(".menu").addClass('slideInRight');
    this.opened = true;    
    
  }

  close() {
    $(".menu").removeClass('slideInRight');
    $(".menu").addClass('slideOutRight');  
    setTimeout(function (){
      $(".menu").addClass('is-hidden');  
    },1000);
    
    this.opened = false;    
    
  }


}
