import {Directive, ElementRef} from 'angular2/core';
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

@Directive({
    selector: '[slimscroll]'
})
export class SlimScrool {
    constructor(private _el: ElementRef) {
        if (!jQuery().slimScroll) {
            return;
        }
        jQuery(this._el).each(function() {
            if (jQuery(this).attr("data-initialized")) {
                return; // exit
            }

            let height;

            if (jQuery(this).attr("data-height")) {
                height = jQuery(this).attr("data-height");
            } else {
                height = jQuery(this).css('height');
            }

            jQuery(this).slimScroll({
                allowPageScroll: false, // allow page scroll when the element scroll is ended
                size: '7px',
                color: (jQuery(this).attr("data-handle-color") ? jQuery(this).attr("data-handle-color") : '#bbb'),
                wrapperClass: (jQuery(this).attr("data-wrapper-class") ? jQuery(this).attr("data-wrapper-class") : 'slimScrollDiv'),
                railColor: (jQuery(this).attr("data-rail-color") ? jQuery(this).attr("data-rail-color") : '#eaeaea'),
                position: 'right',
                height: height,
                alwaysVisible: (jQuery(this).attr("data-always-visible") == "1" ? true : false),
                railVisible: (jQuery(this).attr("data-rail-visible") == "1" ? true : false),
                disableFadeOut: true
            });

            jQuery(this).attr("data-initialized", "1");
        });
    }
}