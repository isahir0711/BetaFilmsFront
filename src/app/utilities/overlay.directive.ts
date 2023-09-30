import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appOverlay]'
})
export class OverlayDirective {

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  @HostListener('mouseenter') onMouseEnter() {
    this.showOverlay();
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.hideOverlay();
  }

  private showOverlay() {

    const backdrop = document.querySelector('.backdrop');

    backdrop?.classList.add('show');

    let position = this.el.nativeElement.getBoundingClientRect();
        (backdrop as HTMLElement).style.left = position.x  + 'px';
        (backdrop as HTMLElement).style.top = position.y  + 'px';
        (backdrop as HTMLElement).style.height = position.height  + 'px';
        (backdrop as HTMLElement).style.width = position.width  + 'px';

  }

  private hideOverlay() {
    const backdrop = document.querySelector('.backdrop');
    backdrop?.classList.remove('show');
  }
}
