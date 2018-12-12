import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Components
import { ProgressBarModule } from './progress-bar/progress-bar.module';
import { WizardStepModule } from './wizard-step/wizard-step.module';

@NgModule({
  imports: [
    CommonModule,
    ProgressBarModule,
    WizardStepModule,
  ],
  declarations: [
  ],
  exports: [
    ProgressBarModule,
    WizardStepModule
  ]
})
export class FxcmCustomUiModule { }
