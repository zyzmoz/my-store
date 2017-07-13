import { Component, OnInit } from '@angular/core';
import { MenuService } from '../../providers/menu.service';
import { CartService } from '../../providers/cart.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.sass']
})
export class MenuComponent implements OnInit {  

  constructor(public menu: MenuService, public cart: CartService) { 
    
  }

  ngOnInit() {
  }

  

}
