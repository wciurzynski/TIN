import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../category.service';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent implements OnInit {

  constructor(
    private _categoryService: CategoryService
  ) {
    this._categoryService.setLoginPage(false);
  }

  ngOnInit() {
  }

}
