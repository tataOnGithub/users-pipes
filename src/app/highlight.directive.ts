import { Directive, ElementRef, HostListener, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective implements OnInit {
  @Input() color: string = '';

  constructor(private ref: ElementRef) { }

  @HostListener('click')
  yellowColor() {
    this.ref.nativeElement.style.background = 'yellow';
    this.ref.nativeElement.style.color = 'black';
  }

  ngOnInit(): void {
    this.ref.nativeElement.style.background = this.color;
  }
}
