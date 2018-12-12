import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WizardStepComponent } from './wizard-step.component';

@NgModule({
  imports: [ CommonModule ],
  declarations: [ WizardStepComponent ],
  exports: [ WizardStepComponent ]
})
export class WizardStepModule { }
