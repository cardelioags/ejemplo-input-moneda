import { Pipe, PipeTransform } from '@angular/core';

const PADDING = '000000';

@Pipe({
  name: 'miMoneda'
})
export class MiMonedaPipe implements PipeTransform {
  private SEPARADOR_DECIMAL: string;
  private SEPARADOR_MILLAR: string;

  constructor() {
    // TODO comes from configuration settings
    this.SEPARADOR_DECIMAL = '.';
    this.SEPARADOR_MILLAR = ',';
  }

  transform(value: number | string, numeroDeDecimales: number = 2): string {
    let [entero, decimal = ''] = (value || '')
      .toString()
      .split(this.SEPARADOR_DECIMAL);

    decimal =
      numeroDeDecimales > 0
        ? this.SEPARADOR_DECIMAL +
          (decimal + PADDING).substring(0, numeroDeDecimales)
        : '';

    entero = entero.replace(/\B(?=(\d{3})+(?!\d))/g, this.SEPARADOR_MILLAR);

    return entero + decimal;
  }

  parse(value: string, numeroDeDecimales: number = 2): string {
    let [entero, decimal = ''] = (value || '').split(this.SEPARADOR_DECIMAL);

    entero = entero.replace(new RegExp(this.SEPARADOR_MILLAR, 'g'), '');

    decimal =
      parseInt(decimal, 10) > 0 && numeroDeDecimales > 0
        ? this.SEPARADOR_DECIMAL +
          (decimal + PADDING).substring(0, numeroDeDecimales)
        : '';

    return entero + decimal;
  }
}
