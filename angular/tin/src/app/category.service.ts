import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ICategory } from './category';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  private _urlCategoryList: string = 'http://tin.pl:3000/category';

  constructor(private http: HttpClient) { }

  getCategoryList(): Observable<ICategory[]> {
    return this.http.get<ICategory[]>(this._urlCategoryList);
  }

}
