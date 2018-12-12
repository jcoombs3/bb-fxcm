import { Component, EventEmitter } from '@angular/core';
import { ItemModel } from '@backbase/core-ang';
 
@Component({
  selector: 'fxcm-forms-ui-button',
  templateUrl: 'fxcm-form-button.component.html',
})
export class FxcmFormButtonComponent {
  change = new EventEmitter<string>();
 
  constructor(public model: ItemModel) {}
  
  onClick(event: Event) {
    event.preventDefault();
    this.change.next('');
  }
}
