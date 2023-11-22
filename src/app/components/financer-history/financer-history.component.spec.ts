import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinancerHistoryComponent } from './financer-history.component';

describe('FinancerHistoryComponent', () => {
  let component: FinancerHistoryComponent;
  let fixture: ComponentFixture<FinancerHistoryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FinancerHistoryComponent]
    });
    fixture = TestBed.createComponent(FinancerHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
