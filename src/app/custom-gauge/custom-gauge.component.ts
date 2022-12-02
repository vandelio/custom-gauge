import { Component, Input, OnInit } from '@angular/core';
@Component({
  selector: 'custom-gauge',
  templateUrl: './custom-gauge.component.html',
  styleUrls: ['./custom-gauge.component.css'],
})
export class CustomGaugeComponent implements OnInit {
  @Input() value: number;

  constructor() {}

  ngOnInit() {}
  /*
  setNeedlePosition() {
    document
      .querySelector('#gaugeneedle')
      .setAttribute('transform', 'rotate(-100 80 80)');
  }
*/
  /// Take an input
  //  - should be (0, 0.1, 0.2 ... , 1)

  // to display ticks and gauge value
  //  - calculate it into 1<->5

  // To rotate gauge needle
  // - calculate into range -100 <-> 100

  // change color of gauge circle
  // - find 1/3
}
