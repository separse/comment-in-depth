import { Directive, ElementRef, HostListener, Input } from '@angular/core';


@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {
@Input('appHighlight') color = 'red';
  constructor(private element: ElementRef) { 
    console.log(element);
    // element.nativeElement.style.backgroundcolor = 'blue'; 
  }
  @HostListener('mouseenter') addHighlight() {
     this.element.nativeElement.style.background = this.color; 
  }
  @HostListener('mouseleave') removeHighlight() {
      this.element.nativeElement.style.background = null; 
  }
}
