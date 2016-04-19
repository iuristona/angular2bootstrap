import {Directive, ElementRef, Input} from 'angular2/core';
declare var jQuery;

@Directive({
    selector: '[inputmask]',
    inputs: ['inputmask']
})
export class InputMask { 
    constructor(private _el: ElementRef) { }
    
    set inputmask(config: Object) {
        jQuery(this._el.nativeElement).inputmask(config);
    }
}