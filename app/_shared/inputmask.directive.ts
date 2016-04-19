import {Directive, ElementRef, Input} from 'angular2/core';

declare var jQuery;

@Directive({
  selector: '[inputmask]',
  inputs: ['inputmask']
})
export class InputMask {
  //@Input() inputmask: string;
  
  constructor(private _el: ElementRef) {
    //console.log(this.inputmask);
  }
  
  set inputmask(config: Object) {
    jQuery(this._el.nativeElement).inputmask(config);

  }
}