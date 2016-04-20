import * as moment_ from 'moment';

export const moment: moment.MomentStatic = (<any>moment_)['default'] || moment_;

export class Utils {

    static orderBy<T>(list: T[], keyOf: (item: T) => any): T[] {
        let result = list.slice(0);
        result = list.sort((a, b) => {
            let ka = keyOf(a) === null ? '' : keyOf(a);
            let kb = keyOf(b) === null ? '' : keyOf(b);
            return ka > kb ? 1 : ka < kb ? -1 : 0;
        });
        return result;
    }

    static orderByDescending<T>(list: T[], keyOf: (item: T) => any): T[] {
        let result = list.slice(0);
        result = list.sort((b, a) => {
            let ka = keyOf(a) === null ? '' : keyOf(a);
            let kb = keyOf(b) === null ? '' : keyOf(b);
            return ka > kb ? 1 : ka < kb ? -1 : 0;
        });
        return result;
    }

    static removeAcentos(s: string) {
        if (!s) { return ''; }
        let accentMap = {
            'á': 'a', 'é': 'e', 'í': 'i', 'ó': 'o', 'ú': 'u', 'ã': 'a', 'õ': 'o', 'â': 'a', 'ê': 'e', 'î': 'i', 'ô': 'o', 'û': 'u', 'ç': 'c', 'ä': 'a', 'ë': 'e', 'ï': 'i', 'ö': 'o', 'ü': 'u', 'à': 'a', 'è': 'e', 'ì': 'i', 'ò': 'o', 'ù': 'u',
            'Á': 'A', 'É': 'E', 'Í': 'I', 'Ó': 'O', 'Ú': 'U', 'Ã': 'A', 'Õ': 'O', 'Â': 'A', 'Ê': 'E', 'Î': 'I', 'Ô': 'O', 'Û': 'U', 'Ç': 'C', 'Ä': 'A', 'Ë': 'E', 'Ï': 'I', 'Ö': 'O', 'Ü': 'U', 'À': 'A', 'È': 'E', 'Ì': 'I', 'Ò': 'O', 'Ù': 'U'
        };
        let r = '';
        for (let i = 0; i < s.length; i++) {
            r += accentMap[s.charAt(i)] || s.charAt(i);
        }
        return r;
    }

    static getQueryStringParameterByName(name: string) {
        name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
        var regex = new RegExp('[\\?&]' + name + '=([^&#]*)'),
            results = regex.exec(location.search);
        return results == null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
    }

    static toCamelCase(s: string) {
        return s.replace(/^([A-Z])|\s(\w)/g, (match, p1, p2, offset) => {
            if (p2) return p2.toUpperCase();
            return p1.toLowerCase();
        });
    }

    static toPascalCase(s: string) {
        return s.replace(/^./, (s1) => s1.toUpperCase());
    }

    static validateEmail(s) {
        let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(s);
    }

    static validateCnpj(s) {
        var i;
        var l = '';
        for (i = 0; i < s.length; i++) if (!isNaN(s.charAt(i))) l += s.charAt(i);
        s = l;
        if (s.length != 14) return false;
        var c = s.substr(0, 12);
        var dv = s.substr(12, 2);
        var d1 = 0;
        for (i = 0; i < 12; i++) d1 += c.charAt(11 - i) * (2 + (i % 8));
        if (d1 == 0) return false;
        d1 = 11 - (d1 % 11);
        if (d1 > 9) d1 = 0;
        if (dv.charAt(0) != d1) return false;
        d1 *= 2;
        for (i = 0; i < 12; i++) d1 += c.charAt(11 - i) * (2 + ((i + 1) % 8));
        d1 = 11 - (d1 % 11);
        if (d1 > 9) d1 = 0;
        if (dv.charAt(1) != d1) return false;
        return true;
    }

    static validateCpf(s) {
        var i;
        var l = '';
        for (i = 0; i < s.length; i++) if (!isNaN(s.charAt(i))) l += s.charAt(i);
        s = l;
        if (s.length != 11) return false;
        var c = s.substr(0, 9);
        var dv = s.substr(9, 2);
        var d1 = 0;
        for (i = 0; i < 9; i++) d1 += c.charAt(i) * (10 - i);
        if (d1 == 0) return false;
        d1 = 11 - (d1 % 11);
        if (d1 > 9) d1 = 0;
        if (dv.charAt(0) != d1) return false;
        d1 *= 2;
        for (i = 0; i < 9; i++) {
            d1 += c.charAt(i) * (11 - i);
        }
        d1 = 11 - (d1 % 11);
        if (d1 > 9) d1 = 0;
        if (dv.charAt(1) != d1) return false;
        return true;
    }
}