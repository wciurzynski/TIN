import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-mymodal-login',
  templateUrl: './mymodal-login.component.html',
  styleUrls: ['./mymodal-login.component.css']
})
export class MymodalLoginComponent implements OnInit {
 
  @Input() my_modal_title;
  @Input() my_modal_content;
 
  constructor(public activeModal: NgbActiveModal) {}
 
  ngOnInit() {
  }

  // onSubmit(){
  //   this.authenticationService.login(this.f.username.value, this.f.password.value)
  //   .pipe(first())
  //   .subscribe(
  //       data => {
  //           this.router.navigate([this.returnUrl]);
  //       },
  //       error => {
  //           this.alertService.error(error);
  //           this.loading = false;
  //       });
  // }

}