import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'svg-gauge',
  templateUrl: './svg-gauge.component.svg',
  styleUrls: ['./svg-gauge.component.css'],
})
export class SvgGaugeComponent implements OnInit {
  @Input() value: number;
  colorArray = ['#3BCE58', '#E78002', '#DB0300'];
  needleValue: string = '-110';
  needlePosition: string;
  transformOrigin: number = 80;

  constructor() {}

  ngOnInit() {
    if (this.value === 0.1) this.needleValue = '-100';
    if (this.value === 0.2) this.needleValue = '-90';
    if (this.value === 0.3) this.needleValue = '-60';
    if (this.value === 0.4) this.needleValue = '-30';
    if (this.value === 0.5) this.needleValue = '0';
    if (this.value === 0.6) this.needleValue = '30';
    if (this.value === 0.7) this.needleValue = '60';
    if (this.value === 0.8) this.needleValue = '90';
    if (this.value >= 0.9) this.needleValue = '100';
    this.transformNeedle();
  }

  transformNeedle() {
    const r = this.needleValue;
    const pos = this.transformOrigin;
    this.needlePosition = `rotate(${r} ${pos} ${pos})`;
  }
}
