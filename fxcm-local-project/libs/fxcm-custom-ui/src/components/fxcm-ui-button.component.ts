import { Component, EventEmitter } from '@angular/core';
import { ItemModel } from '@backbase/core-ang';
 
@Component({
  selector: 'fxcm-forms-ui-button',
  template: `
    <p>button!!</p>
  `,
})
export class FxcmUiButtonComponent {
  change = new EventEmitter<string>();
 
  constructor(public itemModel: ItemModel) {}
 
  onChange(value: string) {
    this.change.next(value);
  }
}


//<button bbFormUi [change]="change" *ngIf="model?.properties | async; let props" class="btn btn-primary"    (click)="onClick($event)" [disabled]="props.disabled">{{props.label}}</button>