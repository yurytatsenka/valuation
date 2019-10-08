import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CashValuationEditorComponent } from './cash-valuation-editor.component';

describe('CashValuationEditorComponent', () => {
  let component: CashValuationEditorComponent;
  let fixture: ComponentFixture<CashValuationEditorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CashValuationEditorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CashValuationEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
