import {Directive, ElementRef} from 'angular2/core';

declare var jQuery;

@Directive({
  selector: '[phonemask]'
})
export class PhoneMask {
  constructor(el: ElementRef) {
    //jQuery(el.nativeElement).inputmask({ mask: '(99) 9999[9]-9999', greedy: false, skipOptionalPartCharacter: ' ' });
    jQuery(el.nativeElement).inputmask('(99) 9999-9999');
  }
}