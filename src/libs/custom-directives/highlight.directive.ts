import { Directive, ElementRef, HostListener,Input } from '@angular/core';


@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  //@Input() highlightColor: string;

  constructor(private el :ElementRef) {
    // this.el.nativeElement.style.backgroundColor="orange";
  }

  // @HostListener('mouseenter') onMouseEnter() {
  //   this.highlight('red');
  // }

  // @HostListener('mouseleave') onMouseLeave() {
  //   this.highlight('orange');
  // }


  @HostListener('mouseenter') onMouseEnter() {
    //this.makeInVisible();
    this.makeBigger();
  }

  @HostListener('mouseleave') onMouseLeave() {
    //this.makeVisible();
    this.makeSmall();
  }

  private highlight(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }

  private makeVisible() {
    this.el.nativeElement.style="visibility:visible";
  }

  private makeInVisible() {
    this.el.nativeElement.style="visibility:hidden";
  }

  private makeBigger() {
    this.el.nativeElement.style="font-size:2rem";
  }

  private makeSmall() {
    this.el.nativeElement.style="fpnt-size:0.8rem";
  }

}
