import {Injectable} from 'angular2/core';
import {Router} from 'angular2/router';

@Injectable()
export class UtilsService {

    constructor(private router: Router) { }

    isRouteActive(linkParams: any[]) {
        return this.router.isRouteActive(this.router.generate(linkParams));
    }


}