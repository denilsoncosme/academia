import { Directive, ElementRef, HostListener, Renderer2, Input } from '@angular/core';

@Directive({
  selector: '[changeClassScrollPassed]'
})
export class ChangeClassScrollPassedDirective {

  @Input('changeClassScrollPassed') classNew : string = '';

  constructor(private el: ElementRef, private renderer: Renderer2) { }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    if(this.el.nativeElement.scrollHeight < this.el.nativeElement.ownerDocument.defaultView.scrollY )
       this.renderer.addClass(this.el.nativeElement, this.classNew)
    else
      this.renderer.removeClass(this.el.nativeElement, this.classNew )
  }
}
