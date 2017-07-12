import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cartbar',
  templateUrl: './cartbar.component.html',
  styleUrls: ['./cartbar.component.sass']
})
export class CartbarComponent implements OnInit {
  
  count: number = 99;
  constructor() { }

  ngOnInit() {
  }

}
