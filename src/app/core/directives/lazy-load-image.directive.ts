import {Directive, ElementRef, OnInit} from '@angular/core';

@Directive({selector: 'img'})
export class LazyLoadImageDirective {
    constructor({nativeElement}: ElementRef<HTMLImageElement>) {
        const supports = 'loading' in HTMLImageElement.prototype;

        if (supports) {
            nativeElement.setAttribute('loading', 'lazy');
        }
    }
}
