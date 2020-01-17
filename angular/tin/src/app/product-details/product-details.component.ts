import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  public product = null;

  constructor(private _productService: ProductService) { }

  ngOnInit() {
    this.product = this._productService.getProductList()[0];
  }

  addProduct(product_id) {
    console.log("addProduct " + product_id);
  }

}
