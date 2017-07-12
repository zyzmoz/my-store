import { Component, OnInit } from '@angular/core';
import { MenuService } from '../../providers/menu.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass'],
  

})
export class HeaderComponent implements OnInit {
  
  constructor(public menu: MenuService) { 
    
  }

  ngOnInit() {
  }

  

}
