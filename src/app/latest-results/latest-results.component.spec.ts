import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LatestResultsComponent } from './latest-results.component';

describe('LatestResultsComponent', () => {
  let component: LatestResultsComponent;
  let fixture: ComponentFixture<LatestResultsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LatestResultsComponent]
    });
    fixture = TestBed.createComponent(LatestResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
