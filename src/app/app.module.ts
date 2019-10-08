import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AddValuationComponent } from './components/add-valuation/add-valuation.component';
import { ValuationEditorComponent } from './components/valuation-editor/valuation-editor.component';
import { AssetValuationEditorComponent } from './components/asset-valuation-editor/asset-valuation-editor.component';
import { CashValuationEditorComponent } from './components/cash-valuation-editor/cash-valuation-editor.component';

@NgModule({
  declarations: [
    AppComponent,
    AddValuationComponent,
    ValuationEditorComponent,
    AssetValuationEditorComponent,
    CashValuationEditorComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
