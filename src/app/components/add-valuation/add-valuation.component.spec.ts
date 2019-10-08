import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddValuationComponent } from './add-valuation.component';

describe('AddValuationComponent', () => {
  let component: AddValuationComponent;
  let fixture: ComponentFixture<AddValuationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddValuationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddValuationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
