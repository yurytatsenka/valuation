import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ValuationEditorComponent } from './valuation-editor.component';

describe('ValuationEditorComponent', () => {
  let component: ValuationEditorComponent;
  let fixture: ComponentFixture<ValuationEditorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ValuationEditorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ValuationEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
