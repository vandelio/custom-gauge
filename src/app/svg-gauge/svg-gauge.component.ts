import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'svg-gauge',
  templateUrl: './svg-gauge.component.svg',
  styleUrls: ['./svg-gauge.component.css'],
})
export class SvgGaugeComponent implements OnInit {
  @Input() value: number = 0;
  colorArray = ['#3BCE58', '#E78002', '#DB0300'];
  needleValue: number = -120;
  needlePosition: string = 'rotate(-110 80 80)';
  transformOrigin: number = 80;

  constructor() {}

  ngOnInit() {
    let interv = setInterval(() => {
      this.needleValue += 2;
      const pos = this.transformOrigin;
      this.needlePosition = `rotate(${this.needleValue} ${pos} ${pos})`;
      if (this.needleValue === this.needleTarget(this.value)) {
        clearInterval(interv);
      }
    }, 10);
  }
  needleTarget(value) {
    if (value === 0.1) return -110;
    if (value === 0.2) return -90;
    if (value === 0.3) return -60;
    if (value === 0.4) return -30;
    if (value === 0.5) return 0;
    if (value === 0.6) return 30;
    if (value === 0.7) return 60;
    if (value === 0.8) return 90;
    if (value === 0.9) return 110;
  }
}
