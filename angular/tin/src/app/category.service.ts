import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ICategory } from './category';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  private _urlCategoryList: string = 'http://tin.pl:3000/category';

  private loginPage: boolean = false;

  constructor(private http: HttpClient) { }

  getCategoryList(): Observable<ICategory[]> {
    return this.http.get<ICategory[]>(this._urlCategoryList);
  }

  search(queryString: string) {
    let _URL = this._urlCategoryList + '?category=' + queryString;
    return this.http.get(_URL);
}

  addCategory(categoryName: string) {
    return this.http.post<any>(this._urlCategoryList, { category: categoryName });
    // return this.http.post(this._urlCategoryList, { 'category': categoryName })
    // .pipe(
    //   catchError(this.handleError('addHero', hero))
    // );
  }
  setLoginPage(value: boolean) {
    this.loginPage = value;
  }

  getLoginPage() {
    return this.loginPage;
  }

}
