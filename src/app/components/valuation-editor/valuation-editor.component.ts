import { ValuationType } from './../../models/valuation';
import { Component, OnInit } from '@angular/core';
import { ValuationType, Valuation } from '../../models/valuation';

@Component({
  selector: 'app-valuation-editor',
  templateUrl: './valuation-editor.component.html',
  styleUrls: ['./valuation-editor.component.css']
})
export class ValuationEditorComponent implements OnInit {

  ValuationType = ValuationType;

  selectedValuation: Valuation;

  valuations: Valuation[] = [
    { id: 1, value: 'asset', type: ValuationType.Asset },
    { id: 2, value: 'cash', type: ValuationType.Cash }
  ];

  ngOnInit() {
    this.selectedValuation = this.valuations[0];
  }

  constructor() { }

  updateCurrentValuation(id) {
    this.selectedValuation = this.valuations.filter(valuation => valuation.id === id)[0];
  }

}
