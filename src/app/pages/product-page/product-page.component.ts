import { Component, OnInit,  } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Product } from '../../models/product';
import { CartItem } from '../../models/cart-item';
import { ProductService } from '../../providers/product.service';
import { CartService } from '../../providers/cart.service';


@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.sass']
})
export class ProductPageComponent implements OnInit {

  product: Product;
  private sub: any;
  msg: boolean = false;
  quantity: number = 1;


  constructor(private router: Router, private ac : ActivatedRoute, private prodictService : ProductService,
              private cartService : CartService) {
    this.sub = this.ac.params.subscribe(params => {
      const key = params['key'];
      console.log('Key', key);      
      this.prodictService.getProduct(key).then((res) => {
        const data: any = res;
        this.product = data;
        console.log(this.product);
        
      });
    });

  }

  ngOnInit() {
    
  }

  addToCart = (obj) => {
    let item: CartItem = {
      id: obj.id,
      item: this.cartService.cartList.length + 1,
      description: obj.description,
      url: obj.url,
      price: obj.price,
      quantity: this.quantity,
      picture: obj.picture
    };
    this.msg = true;
    this.cartService.addItem(item);
    setTimeout(() => {
      this.msg = false;
    }, 3000);
  }

  ngOnDestroy() {
    this.product = <Product>{};
    this.sub.unsubscribe();
  }

}
