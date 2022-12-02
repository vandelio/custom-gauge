import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'custom-gauge',
  templateUrl: './custom-gauge.component.html',
  styleUrls: ['./custom-gauge.component.css'],
})
export class CustomGaugeComponent implements OnInit {
  @Input() value: number;
  colorArray = ['#3BCE58', '#E78002', '#DB0300'];
  needleValue: string = '-110';
  needlePosition: string;

  constructor() {}

  ngOnInit() {
    if (this.value === 0.1) this.needleValue = '-110';
    if (this.value === 0.2) this.needleValue = '-90';
    if (this.value === 0.3) this.needleValue = '-60';
    if (this.value === 0.4) this.needleValue = '-30';
    if (this.value === 0.5) this.needleValue = '0';
    if (this.value === 0.6) this.needleValue = '30';
    if (this.value === 0.7) this.needleValue = '60';
    if (this.value === 0.8) this.needleValue = '90';
    if (this.value >= 0.9) this.needleValue = '110';
  }

  transformNeedle() {
    const r = -110;
    const pos = 80;
    this.needlePosition = `${r} ${pos} ${pos}`;
  }

  /// Take an input
  //  - should be (0, 0.1, 0.2 ... , 1)

  // to display ticks and gauge value
  //  - calculate it into 1<->5

  // To rotate gauge needle
  // - calculate into range -110 <-> 110

  // change color of gauge circle
  // - find 1/3
}
