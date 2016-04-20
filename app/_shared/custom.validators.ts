import {AbstractControl} from 'angular2/common';
import {Utils} from './utils';

export class CustomValidators {
    static email(c: AbstractControl): { [key: string]: any } {
        if (c.value !== '') {
            if (!Utils.validateEmail(c.value)) {
                return { 'email': true };
            }
        }        

    }
}