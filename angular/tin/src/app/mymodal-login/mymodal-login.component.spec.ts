import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MymodalLoginComponent } from './mymodal-login.component';

describe('MymodalLoginComponent', () => {
  let component: MymodalLoginComponent;
  let fixture: ComponentFixture<MymodalLoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MymodalLoginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MymodalLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
