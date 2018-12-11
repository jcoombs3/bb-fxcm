import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProgressBarModule } from './progress-bar/progress-bar.module';

@NgModule({
  imports: [
    CommonModule,
    ProgressBarModule,
  ],
  declarations: [
  ],
  exports: [
    ProgressBarModule
  ]
})
export class FxcmCustomUiModule { }
