import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiProgressBarModule } from './ui-progress-bar/ui-progress-bar.module';

@NgModule({
  imports: [
    CommonModule,
    UiProgressBarModule,
  ],
  declarations: [
  ],
  exports: [
    UiProgressBarModule
  ]
})
export class FxcmCustomUiModule { }
