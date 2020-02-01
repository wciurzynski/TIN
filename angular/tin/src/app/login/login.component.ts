import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import { AlertService, AuthenticationService } from '../_services';
import { CategoryService } from '../category.service';
import { FormControl } from '@angular/forms';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  // loginForm: FormGroup;
  loading = false;
  submitted = false;
  returnUrl: string;
  loginPage;
  username = new FormControl('');
  password = new FormControl('');

  constructor(
    // private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private authenticationService: AuthenticationService,
    private alertService: AlertService,
    private _categoryService: CategoryService,
  ) {
    // redirect to home if already logged in
    // this.loginPage = this._categoryService.getLoginPage();
    if (this.authenticationService.currentUserValue) {
      this.router.navigate(['/']);
    }
  }

  ngOnInit() {
    // this.loginForm = this.formBuilder.group({
    //   username: ['', Validators.required],
    //   password: ['', Validators.required]
    // });

    // get return url from route parameters or default to '/'
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  // convenience getter for easy access to form fields
  // get f() { return this.loginForm.controls; }

  onSubmit() {
    this.submitted = true;
    // console.log(this.login.value);
    // console.log(this.password.value);
    // stop here if form is invalid
    // if (this.loginForm.invalid) {
    //   return;
    // }

    this.loading = true;
    this.authenticationService.login(this.username.value, this.password.value)
      .pipe(first())
      .subscribe(
        data => {
          console.log(this.returnUrl);
          this.router.navigate([this.returnUrl]);
        },
        error => {
          console.log(error);
          this.alertService.error(error);
          this.loading = false;
        });
  }
}
