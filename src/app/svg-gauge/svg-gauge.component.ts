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
      needleRotatingValue: -110,
      displayValue: '1',
      titleSuffix: 'Good',
    },
    {
      color: '#E78002',
      needleRotatingValue: -60,
      displayValue: '2',
      titleSuffix: 'Medium',
    },
    {
      color: '#E78002',
      needleRotatingValue: 0,
      displayValue: '3',
      titleSuffix: 'Medium',
    },
    {
      color: '#E78002',
      needleRotatingValue: 60,
      displayValue: '4',
      titleSuffix: 'Medium',
    },
    {
      color: '#DB0300',
      needleRotatingValue: 110,
      displayValue: '5',
      titleSuffix: 'Poor',
    },
  ];

  displayValueOfTotal = '5';
  colorArray = ['#3BCE58', '#E78002', '#DB0300'];
  needleRotatingValue: number = -110; // starting point
  needlePosition: string = 'rotate(' + this.needleRotatingValue + ' 80 80)'; // starting point
  transformOrigin: number = 80;
  title: string = "your asset's health is ";
  setting;

  constructor() {}

  ngOnInit() {
    this.setting = this.getGaugeSettings();

    // Move needle until final position
    /*let movingGaugeNeedle = setInterval(() => {
      this.needleRotatingValue += 2;
      this.setNeedlePosition();
      if (this.needleRotatingValue === this.setting.needleRotatingValue)
        clearInterval(movingGaugeNeedle);
    }, 10);*/
  }
  setNeedlePosition() {
    const pos = this.transformOrigin;
    this.needlePosition = `rotate(${this.needleRotatingValue} ${pos} ${pos})`;
  }
  getGaugeSettings() {
    console.log('index', this.getIndexByInputValue());
    return this.gaugeSettings[this.getIndexByInputValue()];
  }
  getIndexByInputValue() {
    if (this.value <= 0.2) return 0;
    if (this.value > 0.2 && this.value <= 0.4) return 1;
    if (this.value > 0.4 && this.value < 0.6) return 2;
    if (this.value >= 0.6 && this.value < 0.8) return 3;
    if (this.value >= 0.8) return 4;
  }
}
