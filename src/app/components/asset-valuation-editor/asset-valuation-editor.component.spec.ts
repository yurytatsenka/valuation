import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssetValuationEditorComponent } from './asset-valuation-editor.component';

describe('AssetValuationEditorComponent', () => {
  let component: AssetValuationEditorComponent;
  let fixture: ComponentFixture<AssetValuationEditorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssetValuationEditorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssetValuationEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
