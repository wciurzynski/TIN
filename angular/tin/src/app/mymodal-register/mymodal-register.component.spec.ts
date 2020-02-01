import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MymodalRegisterComponent } from './mymodal-register.component';

describe('MymodalRegisterComponent', () => {
  let component: MymodalRegisterComponent;
  let fixture: ComponentFixture<MymodalRegisterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MymodalRegisterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MymodalRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
