import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS, AsyncRoute} from 'angular2/router';
import {NavbarComponent} from './navbar/navbar.component';
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
    directives: [ROUTER_DIRECTIVES, NavbarComponent, HomeComponent],
    template: `    
<navbar></navbar>
<div class="container-fluid">
    
    <router-outlet></router-outlet>
        
</div>
`
})
export class AppComponent { }
