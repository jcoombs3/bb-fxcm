import { Component, EventEmitter } from '@angular/core';
import { ItemModel } from '@backbase/core-ang';
 
@Component({
  selector: 'fxcm-forms-ui-input-text',
  templateUrl: 'fxcm-form-input-text.component.html',
})
export class FxcmFormInputTextComponent {
  change = new EventEmitter<string>();
  
  constructor(public model: ItemModel) {}
  
  /**
   * Internal change method to call the event emitter
   * @param {?} value
   * @return {?}
   */
  onChange(value: string) {
    this.change.next(value);
  }
}
