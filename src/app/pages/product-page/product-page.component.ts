import { Component, OnInit,  } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Product } from '../../models/product';
import { ProductService } from '../../providers/product.service';
import * as firebase from 'firebase';


@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.sass']
})
export class ProductPageComponent implements OnInit {

  product: Product;
  private sub: any;

  constructor(private router: Router, private ac : ActivatedRoute, private prodictService : ProductService) {
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
    // firebase.auth().onAuthStateChanged(authUser => {
    //   if (!authUser)
    //     this.router.navigate(['']);
    // });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
