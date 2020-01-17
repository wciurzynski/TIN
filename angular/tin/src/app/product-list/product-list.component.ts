import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  public product_list = [];

  constructor(private _productService: ProductService) { }

  ngOnInit() {
    this.product_list = this._productService.getProductList();
  }

  addProduct(product_id) {
    console.log("addProduct " + product_id);
  }

}
