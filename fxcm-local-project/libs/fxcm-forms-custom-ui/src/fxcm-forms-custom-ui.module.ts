import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BackbaseCoreModule } from '@backbase/core-ang';
import { BbFormsErrorsModule } from '@backbase/forms-errors-ang';

// Directives
import { BbFormsDirectivesModule } from '@backbase/forms-directives-ang';

// Components
import { FxcmFormButtonComponent } from './components/fxcm-form-button/fxcm-form-button.component';
import { FxcmFormInputTextComponent } from './components/fxcm-form-input-text/fxcm-form-input-text.component';
import { FxcmFormInputCheckboxComponent } from './components/fxcm-form-input-checkbox/fxcm-form-input-checkbox.component';
import { FxcmFormFlagSelectorComponent } from './components/fxcm-form-flag-selector/fxcm-form-flag-selector.component';

@NgModule({
  imports: [
    CommonModule,
    BbFormsErrorsModule,
    BbFormsDirectivesModule,
    BackbaseCoreModule.withConfig({
      classMap: {
        FxcmFormButtonComponent,
        FxcmFormInputTextComponent,
        FxcmFormInputCheckboxComponent,
        FxcmFormFlagSelectorComponent
      },
    }),
  ],
  declarations: [
    FxcmFormButtonComponent,
    FxcmFormInputTextComponent,
    FxcmFormInputCheckboxComponent,
    FxcmFormFlagSelectorComponent
  ]
})
export class FxcmFormsCustomUiModule { }
