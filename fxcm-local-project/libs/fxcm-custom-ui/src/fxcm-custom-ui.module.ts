import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BackbaseCoreModule } from '@backbase/core-ang';
import { BbFormsErrorsModule } from '@backbase/forms-errors-ang';

// Directives
import { BbFormsDirectivesModule } from '@backbase/forms-directives-ang';

// Components
import { FxcmFormButtonComponent } from './components/fxcm-form-button/fxcm-form-button.component';
import { FxcmFormInputTextComponent } from './components/fxcm-form-input-text/fxcm-form-input-text.component';

@NgModule({
  imports: [
    CommonModule,
    BbFormsErrorsModule,
    BbFormsDirectivesModule,
    BackbaseCoreModule.withConfig({
      classMap: {
        FxcmFormButtonComponent,
        FxcmFormInputTextComponent
      },
    }),
  ],
  declarations: [
    FxcmFormButtonComponent,
    FxcmFormInputTextComponent
  ]
})
export class FxcmCustomUiModule { }
