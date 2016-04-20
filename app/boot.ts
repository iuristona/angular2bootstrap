import {bootstrap} from 'angular2/platform/browser';
import {provide} from 'angular2/core';
import {ROUTER_PROVIDERS, LocationStrategy, HashLocationStrategy, APP_BASE_HREF} from 'angular2/router';
import {AppComponent} from './app.component';

//import {enableProdMode} from 'angular2/core';
//enableProdMode();

import * as moment_ from 'moment';
const moment: moment.MomentStatic = (<any>moment_)['default'] || moment_;

moment.locale('pt-br');

bootstrap(AppComponent, [
    ROUTER_PROVIDERS, 
    provide(LocationStrategy, { useClass: HashLocationStrategy }),
    provide(APP_BASE_HREF, { useValue: '/' })
]);



//https://auth0.com/blog/2015/11/10/introducing-angular2-jwt-a-library-for-angular2-authentication/