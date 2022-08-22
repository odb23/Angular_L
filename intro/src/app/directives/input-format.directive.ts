import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appInputFormat]',
})
export class InputFormatDirective {
  @Input('appInputFormat') format: String = '';

  constructor(private el: ElementRef) {}

  @HostListener('blur') onBlur() {
    let value: String = this.el.nativeElement.value;

    if (this.format === 'lowercase')
      this.el.nativeElement.value = value.toLowerCase();
    else this.el.nativeElement.value = value.toUpperCase();
  }
}
