import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { first } from 'rxjs/operators';
import { AlertService, UserService, AuthenticationService } from '../_services';
import { FormControl } from '@angular/forms';
import { User } from '../_models';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  loading = false;
  submitted = false;
  firstname = new FormControl('');
  surname = new FormControl('');
  email = new FormControl('');
  username = new FormControl('');
  password = new FormControl('');

  constructor(
    private router: Router,
    private authenticationService: AuthenticationService,
    private userService: UserService,
    private alertService: AlertService
  ) {
    // redirect to home if already logged in
    if (this.authenticationService.currentUserValue) {
      this.router.navigate(['/']);
    }
  }
  ngOnInit() {
  }

  onSubmit() {
    this.submitted = true;

    // // stop here if form is invalid
    // if (this.registerForm.invalid) {
    //     return;
    // }

    this.loading = true;
    let user: User = {
      'firstname': this.firstname.value,
      'surname': this.surname.value,
      'email': this.email.value,
      'username': this.username.value,
      'password': this.password.value,
      'token': null,
      'role': 'user',
    }
    this.userService.register(user)
      .pipe(first())
      .subscribe(
        data => {
          console.log('Registration successful');
          this.alertService.success('Registration successful', true);
          this.authenticationService.login(this.username.value, this.password.value)
            .pipe(first())
            .subscribe(
              data => {
                this.router.navigate(['/login']);
              },
              error => {
                console.log(error);
                this.alertService.error(error);
                this.loading = false;
              });
          
        },
        error => {
          console.log(error);
          this.alertService.error(error);
          this.loading = false;
        });
  }
}

