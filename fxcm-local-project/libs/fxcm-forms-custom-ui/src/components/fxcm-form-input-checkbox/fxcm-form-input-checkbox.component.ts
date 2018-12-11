import { Component, EventEmitter } from '@angular/core';
import { ItemModel } from '@backbase/core-ang';
 
@Component({
  selector: 'fxcm-forms-ui-input-checkbox',
  templateUrl: 'fxcm-form-input-checkbox.component.html',
})
export class FxcmFormInputCheckboxComponent {
  change = new EventEmitter<string>();
  helpIsOpen: Boolean = false;
  
  constructor(public model: ItemModel) {}
  
  /**
   * Internal change method to call the event emitter
   * @param {?} value
   * @return {?}
   */
  onChange(value: string) {
    this.change.next(value);
  }
  
  toggleHelp() {
    this.helpIsOpen = !this.helpIsOpen;
  }
}
