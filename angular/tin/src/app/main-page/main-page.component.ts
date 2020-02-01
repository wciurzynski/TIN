import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../category.service';


@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {

  constructor(
    private _categoryService: CategoryService,
  ) {
    this._categoryService.setLoginPage(false);
   }

  ngOnInit() {
  }

}
