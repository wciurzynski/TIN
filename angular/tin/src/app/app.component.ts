import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from './_services';
import { User } from './_models';
import { CategoryService } from './category.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Ciuchy.pl';
  currentUser: User;

  constructor(
    private router: Router,
    private authenticationService: AuthenticationService,
    // private _categoryService: CategoryService,
  ) {
    // this.loginPage = this._categoryService.getLoginPage();
    this.authenticationService.currentUser.subscribe(x => this.currentUser = x);
  }

  ngOnInit() {
  }

  logout() {
    this.authenticationService.logout();
    this.router.navigate(['/login']);
  }
}
