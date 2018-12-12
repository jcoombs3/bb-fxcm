import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'bb-wizard-step-ui',
  templateUrl: './wizard-step.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WizardStepComponent implements OnInit {
  @Input() isActive: Boolean = false;
  @Input() isComplete: Boolean = false;
  @Input() icon: String = 'user-circle';
  @Input() heading: String = '';
  
  constructor() { }

  ngOnInit() { }
}