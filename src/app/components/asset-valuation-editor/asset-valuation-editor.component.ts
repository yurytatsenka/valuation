import { Component, OnInit, Input } from '@angular/core';
import { Valuation } from 'src/app/models/valuation';

@Component({
  selector: 'app-asset-valuation-editor',
  templateUrl: './asset-valuation-editor.component.html',
  styleUrls: ['./asset-valuation-editor.component.css']
})
export class AssetValuationEditorComponent implements OnInit {
  @Input() valuation: Valuation;

  constructor() { }

  ngOnInit() {
  }

}
