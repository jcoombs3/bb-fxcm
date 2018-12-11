import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'bb-progress-bar-ui',
  templateUrl: './progress-bar.component.html',
  changeDetection: ChangeDetectionStrategy.onPush
})
export class ProgressBarComponent implements OnInit, OnChanges {
  @Input() complete: number = 0;
  
  constructor() { 
  }

  ngOnInit() {
  } 
}