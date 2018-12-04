import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BackbaseCoreModule } from '@backbase/foundation-ang/core';
import { BbFormsErrorsModule } from '@backbase/forms-errors-ang';
import { FxcmStyleguideComponent } from './fxcm-styleguide.component';

@NgModule({
  imports: [
    CommonModule,
    BbFormsErrorsModule,
    BackbaseCoreModule.withConfig({
        classMap: { FxcmStyleguideComponent }
      })
  ],
  declarations: [FxcmStyleguideComponent]
})
export class FxcmStyleguideModule { }
