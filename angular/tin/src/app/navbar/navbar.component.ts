import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../category.service';
import { Router } from '@angular/router';
import { AuthenticationService } from '../_services';
import { User } from '../_models';
import { FormControl } from '@angular/forms';
// import 'rxjs/add/operator/debounceTime';
// import 'rxjs/add/operator/distinctUntilChanged';
// import 'rxjs/add/operator/switchMap';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  title = 'ng-bootstrap-modal-demo';
  isLoginIn = false;
  loginPage;
  currentUser: User;
  results: any[] = [];
  queryField: FormControl = new FormControl();

  constructor(
    private router: Router,
    private authenticationService: AuthenticationService,
    private _categoryService: CategoryService,
  ) {
    this.loginPage = this._categoryService.getLoginPage();
    this.currentUser = this.authenticationService.currentUserValue;
    this.authenticationService.currentUser.subscribe(x => this.currentUser = x);
    console.log(this.currentUser);
  }

  ngOnInit() {
    // this.queryField.valueChanges.subscribe(result => console.log(result));
    this.queryField.valueChanges
      .subscribe(queryField => this.onChange(queryField))
    // .subscribe(response => this.results = response['data']));
  }

  onChange(queryField) {
    if (!queryField) {
      this.results = [];
    } else {
      this._categoryService.search(queryField)
        .subscribe(response => this.results = response['data']);
    }
  }
  // private getDismissReason(reason: any): string {
  //   if (reason === ModalDismissReasons.ESC) {
  //     return 'by pressing ESC';
  //   } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
  //     return 'by clicking on a backdrop';
  //   } else {
  //     return `with: ${reason}`;
  //   }
  // }

  login() {
    this.router.navigate(['/login']);
  }

  register() {
    this.router.navigate(['/register']);
  }

  logout() {
    this.authenticationService.logout();
    this.router.navigate(['/']);
  }

  addCategory() {
    this.router.navigate(['/add-category']);
  }
  // openMymodalLogin() {
  //   const modalRef = this.modalService.open(MymodalLoginComponent);
  //   modalRef.componentInstance.my_modal_title = 'I your title';
  //   modalRef.componentInstance.my_modal_content = 'I am your content';
  // }

  // openMymodalRegister() {
  //   const modalRef = this.modalService.open(MymodalRegisterComponent);
  //   modalRef.componentInstance.my_modal_title = 'I your title';
  //   modalRef.componentInstance.my_modal_content = 'I am your content';
  // }

}
