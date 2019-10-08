import { Component, OnInit, Input } from '@angular/core';
import { Valuation } from 'src/app/models/valuation';

@Component({
  selector: 'app-cash-valuation-editor',
  templateUrl: './cash-valuation-editor.component.html',
  styleUrls: ['./cash-valuation-editor.component.css']
})
export class CashValuationEditorComponent implements OnInit {

  @Input() valuation: Valuation;

  constructor() { }

  ngOnInit() {
  }
}
