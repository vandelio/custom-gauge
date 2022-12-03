import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'svg-gauge',
  templateUrl: './svg-gauge.component.svg',
  styleUrls: ['./svg-gauge.component.css'],
})
export class SvgGaugeComponent implements OnInit {
  @Input() value: number = 0;
  gaugeSettings = [
    {
      color: '#3BCE58',
      needleRotatingValue: -120,
      displayValue: 1,
      state: 'Good',
    },
    {
      color: '#E78002',
      needleRotatingValue: -58,
      displayValue: 2,
      state: 'Medium',
    },
    {
      color: '#E78002',
      needleRotatingValue: 0,
      displayValue: 3,
      state: 'Medium',
    },
    {
      color: '#E78002',
      needleRotatingValue: 58,
      displayValue: 4,
      state: 'Medium',
    },
    {
      color: '#DB0300',
      needleRotatingValue: 120,
      displayValue: 5,
      state: 'Poor',
    },
  ];

  displayValueOfTotal = 5;
  needleRotatingValue: number = this.gaugeSettings[0].needleRotatingValue - 10; // starting - is below first point
  needlePosition: string;
  transformOrigin: number = 80;
  title: string = "Your asset's health is ";
  setting;
  date: string[] = new Date().toLocaleString().split(',');
  dateFormatted: string = this.date[0];
  timeFormatted: string = this.date[1];

  constructor() {}

  ngOnInit() {
    this.setting = this.getGaugeSettings();
    // Move needle until final position
    let movingGaugeNeedle = setInterval(() => {
      this.needleRotatingValue += 2;
      this.setNeedlePosition();
      if (this.needleRotatingValue === this.setting.needleRotatingValue)
        clearInterval(movingGaugeNeedle);
    }, 10);
  }
  setNeedlePosition() {
    const pos = this.transformOrigin;
    this.needlePosition = `rotate(${this.needleRotatingValue} ${pos} ${pos})`;
  }
  getGaugeSettings() {
    return this.gaugeSettings[this.getIndexByInputValue()];
  }
  getIndexByInputValue() {
    if (this.value < 0.2) return 0;
    if (this.value >= 0.2 && this.value < 0.4) return 1;
    if (this.value >= 0.4 && this.value <= 0.6) return 2;
    if (this.value > 0.6 && this.value <= 0.8) return 3;
    if (this.value > 0.8) return 4;
  }
}
