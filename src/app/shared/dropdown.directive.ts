import { Directive, OnInit, HostListener, Input, HostBinding, ElementRef } from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective implements OnInit {
 @HostBinding('class.open') isOpen = false;

// This is for toggle on and off the dropdown only when click the div
  // @HostListener('click') toggleOpen() {
  //   this.isOpen = !this.isOpen;
  // }

// This is for toggle on and off by a click anywhere outside
  @HostListener('document:click', ['$event']) toggleOpen() {
    this.isOpen = this.elRef.nativeElement.contains(event.target) ? !this.isOpen : false;
  }
  constructor(private elRef: ElementRef) {}
  ngOnInit(): void {

  }
}


