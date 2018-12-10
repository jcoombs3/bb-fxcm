import { Component, EventEmitter } from '@angular/core';
import { ItemModel } from '@backbase/core-ang';
 
@Component({
  selector: 'fxcm-forms-ui-flag-selector',
  templateUrl: 'fxcm-form-flag-selector.component.html',
})
export class FxcmFormFlagSelectorComponent {
  change = new EventEmitter<string>();
 
  constructor(public model: ItemModel) {}
  
  onChange(value: string) {
    this.change.next(value);
  }
}
