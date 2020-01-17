import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IProduct } from './product';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private _urlProductList: string = 'http://tin.pl:3000/product';
  private _urlProductDetails: string = 'http://tin.pl:3000/product/';

  constructor(private http: HttpClient) { }

  getProductList(): Observable<IProduct[]> {
    return this.http.get<IProduct[]>(this._urlProductList);
  }

  getProductByID(productID: string): Observable<IProduct> {
    return this.http.get<IProduct>(this._urlProductDetails + productID);
  }
}
