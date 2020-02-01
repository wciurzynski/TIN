import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../category.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  loginPage;

  constructor(
    private _categoryService: CategoryService,
  ) {
    this.loginPage = this._categoryService.getLoginPage();
  }

  ngOnInit() {
  }

}
