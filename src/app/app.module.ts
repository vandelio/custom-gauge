import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { SvgGaugeComponent } from './svg-gauge/svg-gauge.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, HelloComponent, SvgGaugeComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
