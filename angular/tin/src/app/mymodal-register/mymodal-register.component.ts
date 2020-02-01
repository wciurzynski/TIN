import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-mymodal-register',
  templateUrl: './mymodal-register.component.html',
  styleUrls: ['./mymodal-register.component.css']
})
export class MymodalRegisterComponent implements OnInit {
 
  @Input() my_modal_title;
  @Input() my_modal_content;
 
  constructor(public activeModal: NgbActiveModal) {}
 
  ngOnInit() {
  }
 
}