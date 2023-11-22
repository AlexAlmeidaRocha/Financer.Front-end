import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewRevenueComponent } from './new-revenue.component';

describe('NewRevenueComponent', () => {
  let component: NewRevenueComponent;
  let fixture: ComponentFixture<NewRevenueComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NewRevenueComponent]
    });
    fixture = TestBed.createComponent(NewRevenueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
