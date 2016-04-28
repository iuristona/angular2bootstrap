import {Pipe, PipeTransform} from 'angular2/core';
import {DatePipe} from 'angular2/common';

@Pipe({
    name: 'phone'
})
export class PhonePipe implements PipeTransform {
    transform(value: any, args: string[]): any {
        let s = value + '';
        s = s.replace(/\D/g, '');
        if (s.length == 10) {
            s = s.replace(/^(\d{2})(\d{4})(\d{4})/, '($1) $2-$3');
        }
        else if (s.length == 11) {
            s = s.replace(/^(\d{2})(\d{5})(\d{4})/, '($1) $2-$3');
        }
        return s;        
    }
}

@Pipe({
    name: 'date'
})
export class StringSafeDatePipe extends DatePipe {
    transform(value: any, args: any[]): string {
        value = typeof value === 'string' ?
            Date.parse(value) : value
        return super.transform(value, args);
    }
}

// @Pipe({
//     name: 'date'
// })
// export class StringSafeNumberPipe extends NumberPipe {
//     transform(value: any, args: any[]): string {
//         value = typeof value === 'string' ?
//             Date.parse(value) : value
//         return super.transform(value, args);
//     }
// }