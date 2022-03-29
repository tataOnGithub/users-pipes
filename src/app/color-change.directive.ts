import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appColorChange]'
})
export class ColorChangeDirective {
  @Input() color: string = '';

  constructor(private ref: ElementRef) { }

  @HostListener('mouseover')
  changeColor() {
    this.ref.nativeElement.style.background = this.color;
  }
}
