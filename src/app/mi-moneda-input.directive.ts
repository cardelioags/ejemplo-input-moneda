import { Directive, OnInit, ElementRef, HostListener } from '@angular/core';
import { MiMonedaPipe } from './mi-moneda.pipe';

@Directive({
  selector: '[appMiMonedaInput]'
})
export class MiMonedaInputDirective implements OnInit {
  private el: HTMLInputElement;

  constructor(
    private elementRef: ElementRef,
    private monedaPipe: MiMonedaPipe
  ) {
    this.el = this.elementRef.nativeElement;
  }
  ngOnInit() {
    this.el.value = this.monedaPipe.transform(this.el.value);
  }

  @HostListener('focus', ['$event.target.value'])
  onFocus(value) {
    this.el.value = this.monedaPipe.parse(value); // opossite of transform
  }

  @HostListener('blur', ['$event.target.value'])
  onBlur(value) {
    this.el.value = this.monedaPipe.transform(value);
  }
}
