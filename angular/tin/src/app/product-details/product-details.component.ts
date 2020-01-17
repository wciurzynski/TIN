import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  public product = null;
  private productID;

  constructor(private _productService: ProductService, private route: ActivatedRoute) {
    console.log('Called Constructor');
    this.route.queryParams.subscribe(params => {
      this.productID = params['productID'];
      console.log(this.productID);
  });
   }

  ngOnInit() {
    this._productService.getProductByID(this.productID)
    .subscribe(data => this.product = data);
  }

  addProduct(product_id) {
    console.log("addProduct " + product_id);
  }

}
