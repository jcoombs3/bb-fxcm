import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BackbaseCoreModule } from '@backbase/foundation-ang/core';
import { FxcmStyleguideComponent } from './fxcm-styleguide.component';

@NgModule({
  imports: [
    CommonModule,
    BackbaseCoreModule.withConfig({
        classMap: { FxcmStyleguideComponent }
      })
  ],
  declarations: [FxcmStyleguideComponent]
})
export class FxcmStyleguideModule { }
