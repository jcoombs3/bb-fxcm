import { Component, OnInit, ElementRef } from '@angular/core';

@Component({
  selector: 'bb-fxcm-styleguide',
  templateUrl: './fxcm-styleguide.component.html',
  styleUrls: ['./fxcm-styleguide.component.scss']
})
export class FxcmStyleguideComponent implements OnInit {
  errors = ["Lorem ipsum dolor sit amet, consectetur adipiscing elit"];

  constructor() { }

  ngOnInit() {
  }

}
