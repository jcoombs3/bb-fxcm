import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BackbaseCoreModule } from '@backbase/foundation-ang/core';
import { FxcmCustomUiModule } from '@backbase/fxcm-custom-ui';
import { FxcmWizardStepsComponent } from './fxcm-wizard-steps.component';

@NgModule({
  imports: [
    CommonModule,
    FxcmCustomUiModule,
    BackbaseCoreModule.withConfig({
        classMap: { FxcmWizardStepsComponent }
      })
  ],
  declarations: [FxcmWizardStepsComponent]
})
export class FxcmWizardStepsModule { }
