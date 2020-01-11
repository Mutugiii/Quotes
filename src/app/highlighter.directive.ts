import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlighter]'
})
export class HighlighterDirective {  
  constructor(private element: ElementRef) { }

  @HostListener('click') onClicks(){
    this.textHighlighter('yellow')
  }

  @HostListener('dblclick') onDoubleClicks(){
    this.textHighlighter(null)
  }

  textHighlighter(action: string){
    this.element.nativeElement.style.backgroundColor = action;
  }
}
