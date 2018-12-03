import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BackbaseCoreModule } from '@backbase/core-ang';

// Directives
import { BbFormsDirectivesModule } from '@backbase/forms-directives-ang';

// Components
import { FxcmUiButtonComponent } from './components/fxcm-ui-button.component';

@NgModule({
  imports: [
    CommonModule,
    BbFormsDirectivesModule,
    BackbaseCoreModule.withConfig({
      classMap: {
        FxcmUiButtonComponent
      },
    }),
  ],
  declarations: [
    FxcmUiButtonComponent
  ]
})
export class FxcmCustomUiModule { }
