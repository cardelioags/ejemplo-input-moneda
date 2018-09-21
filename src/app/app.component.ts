import { Component } from '@angular/core';
import { MiMonedaInputDirective } from './mi-moneda-input.directive';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  valor: '';
  alCambiarValor(event) {
    console.log(event);
  }
}
