import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../category.service';
import { FormControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthenticationService } from '../_services';


@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css']
})
export class AddCategoryComponent implements OnInit {

  category = new FormControl('');


  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private authenticationService: AuthenticationService,
    private _categoryService: CategoryService,
  ) {
    // redirect to home if already logged in
    // this.loginPage = this._categoryService.getLoginPage();
    if (!this.authenticationService.currentUserValue || this.authenticationService.currentUserValue.role !== 'admin') {
      this.router.navigate(['/']);
    }
  }
  ngOnInit() {
  }

  onSubmit() {
    // this._categoryService.getCategoryList()
    // .subscribe(data => {
    //   this.category_list = data['data'];
    // });

    this._categoryService.addCategory(this.category.value).subscribe({
      next: data => this.router.navigate(['/product-list']),
      error: error => console.error('There was an error!', error)
    });
  }
}
