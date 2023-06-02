import { style } from "@angular/animations";
import { Attribute, Host, HostBinding, HostListener, OnInit, Renderer2 } from "@angular/core";
import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appDd]'
})
export class DdDirective implements OnInit {

  constructor(
    private p: ElementRef,
    @Attribute('appDd') myclass: string
    , private render: Renderer2,
    ) {
    console.log(p);
    p.nativeElement.classList.add(myclass || "bg-warning", "text-white", "h-size")
    // this.render.setStyle(this.p.nativeElement,'border','2px solid blue')
  }
  ngOnInit() {
 
  }
  @HostBinding('style.border') color:any
@HostListener('click')onclick(){
  // this.render.setStyle(this.p.nativeElement,'border','2px solid blue')
  this.color='2px solid green'
  alert('hi')
}

}
