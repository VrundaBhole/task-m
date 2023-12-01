import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Side2Component } from './side2.component';

describe('Side2Component', () => {
  let component: Side2Component;
  let fixture: ComponentFixture<Side2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Side2Component]
    });
    fixture = TestBed.createComponent(Side2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
