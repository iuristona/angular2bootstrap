import {Component} from 'angular2/core';
import {Alert, TAB_DIRECTIVES} from 'ng2-bootstrap/ng2-bootstrap';
import {RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS, AsyncRoute} from 'angular2/router';
import {NavbarComponent} from './navbar/navbar.componet';
//import {AboutComponent} from './about/about.component';
import {HomeComponent} from './home/home.component';
import {ContactsRootComponent} from './contacts/contacts.root.component';


declare var System;

@RouteConfig([
    { path: '/', name: 'Home', component: HomeComponent, useAsDefault: true },
    //{ path: '/about', name: 'About', component: AboutComponent },
    new AsyncRoute({path: '/about', name: 'About', loader: () => System.import('/app/about/about.component').then(m => m.AboutComponent)}),
    { path: '/contacts/...', name: 'Contacts', component: ContactsRootComponent },
    { path: '/**', redirectTo: ['Home'] }
])
@Component({
    selector: 'app',
    directives: [ROUTER_DIRECTIVES, Alert, TAB_DIRECTIVES, NavbarComponent, HomeComponent],
    template: `    
<navbar></navbar>
<div class="container">
    
    <router-outlet></router-outlet>
        
</div>

`
})
export class AppComponent { }
