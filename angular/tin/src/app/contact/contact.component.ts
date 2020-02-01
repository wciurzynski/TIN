import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../category.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor(
    private _categoryService: CategoryService
  ) {
    this._categoryService.setLoginPage(false);
   }

  ngOnInit() {
  }

}
