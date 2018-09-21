import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { MiMonedaPipe } from './mi-moneda.pipe';
import { MiMonedaInputDirective } from './mi-moneda-input.directive';

@NgModule({
  declarations: [AppComponent, MiMonedaPipe, MiMonedaInputDirective],
  imports: [BrowserModule, CommonModule, FormsModule],
  providers: [MiMonedaPipe],
  bootstrap: [AppComponent]
})
export class AppModule {}



