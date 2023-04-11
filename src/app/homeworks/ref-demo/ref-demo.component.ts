import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-ref-demo',
  templateUrl: './ref-demo.component.html',
})
export class RefDemoComponent {
    @ViewChild('input') inputElement!: ElementRef;

    constructor() {}

    click() {
        this.inputElement.nativeElement.focus();
    }
}