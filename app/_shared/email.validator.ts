import {Directive, provide} from 'angular2/core';
import {Validator, NG_VALIDATORS, Control} from 'angular2/common';
import {CustomValidators} from './custom.validators';

@Directive({
    selector: '[email][ngControl]',
    providers: [provide(NG_VALIDATORS, { useExisting: EmailValidator, multi: true })]
})
export class EmailValidator implements Validator {
    validate(c: Control): { [key: string]: any } {
        return CustomValidators.email(c);     
    }
}

