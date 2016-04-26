import {bootstrap} from 'angular2/platform/browser';
import {provide} from 'angular2/core';
import {HTTP_PROVIDERS, HTTP_BINDINGS} from 'angular2/http';
import {ROUTER_PROVIDERS, LocationStrategy, HashLocationStrategy, APP_BASE_HREF} from 'angular2/router';
import {AppComponent} from './app.component';
import {moment} from './_shared/utils';
import 'rxjs/add/operator/map';

//import {enableProdMode} from 'angular2/core';
//enableProdMode();

// import * as moment_ from 'moment';
// const moment: moment.MomentStatic = (<any>moment_)['default'] || moment_;

//declare var jQuery;

moment.locale('pt-br');

bootstrap(AppComponent, [
    ROUTER_PROVIDERS, 
    HTTP_PROVIDERS,
    HTTP_BINDINGS,
    provide(LocationStrategy, { useClass: HashLocationStrategy }),
    provide(APP_BASE_HREF, { useValue: '/' })
]);



//https://auth0.com/blog/2015/11/10/introducing-angular2-jwt-a-library-for-angular2-authentication/