import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS, AsyncRoute} from 'angular2/router';
import {NavbarComponent} from './navbar/navbar.component';
//import {AboutComponent} from './about/about.component';
import {HomeComponent} from './home/home.component';
import {ContactsRootComponent} from './contacts/contacts.root.component';

//declare var System;

@RouteConfig([
    { path: '/', name: 'Home', component: HomeComponent, useAsDefault: true },
    new AsyncRoute({ path: '/about', name: 'About', loader: () => System.import('/app/about/about.component').then(m => m.AboutComponent) }),
    new AsyncRoute({ path: '/pessoas/...', name: 'Pessoas', loader: () => System.import('/app/pessoas/pessoas.component').then(m => m.PessoasComponent) }),
    new AsyncRoute({
        path: '/customers/...', name: 'Customers', loader: () => {
            console.debug(`customers loading starts at: ${new Date()}`); //aqui pode mostrar um loader
            return System.import('/app/customers/customers.component').then(m => {
                console.debug(`customers loading ends at: ${new Date()}`);  //aqui oculta o loader
                return m.CustomersComponent;
            });
        }
    }),
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
