import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'bb-wizard-step-ui',
  templateUrl: './wizard-step.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WizardStepComponent implements OnInit {

  constructor() { }

  ngOnInit() { }
}