import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BackbaseCoreModule } from '@backbase/core-ang';

// Directives
import { BbFormsDirectivesModule } from '@backbase/forms-directives-ang';

// Components
import { FxcmFormButtonComponent } from './components/fxcm-form-button.component';

@NgModule({
  imports: [
    CommonModule,
    BbFormsDirectivesModule,
    BackbaseCoreModule.withConfig({
      classMap: {
        FxcmFormButtonComponent
      },
    }),
  ],
  declarations: [
    FxcmFormButtonComponent
  ]
})
export class FxcmCustomUiModule { }
