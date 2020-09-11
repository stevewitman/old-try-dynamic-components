import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TypeAdvertisementComponent } from './type-advertisement.component';

describe('TypeAdvertisementComponent', () => {
  let component: TypeAdvertisementComponent;
  let fixture: ComponentFixture<TypeAdvertisementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TypeAdvertisementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TypeAdvertisementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
