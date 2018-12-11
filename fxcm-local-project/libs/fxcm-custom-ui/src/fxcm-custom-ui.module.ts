import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BackbaseCoreModule } from '@backbase/core-ang';

@NgModule({
  imports: [
    CommonModule,
    BackbaseCoreModule.withConfig({
      classMap: {
      },
    }),
  ],
  declarations: [
  ]
})
export class FxcmCustomUiModule { }
