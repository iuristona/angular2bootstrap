import {Component} from 'angular2/core';
import {ROUTER_DIRECTIVES, RouteConfig} from 'angular2/router';
import {ContactsComponent} from './contacts.component';
import {ContactComponent} from './contact.component';

@RouteConfig([
    { path: '/', name: 'Contacts', component: ContactsComponent, useAsDefault: true },
    { path: '/:id', name: 'Contact', component: ContactComponent },
    { path: '/:id/:tab', name: 'ContactSetTab', component: ContactComponent }
])

@Component({
    selector: 'contacts-root',
    directives: [ROUTER_DIRECTIVES], 
    template: `


    <div class="panel panel-default">
      <div class="panel-heading">
        <h1>Contacts</h1>
      </div>
      <div class="panel-body">
        <router-outlet></router-outlet>
      <div>
    </div>

`
})
export class ContactsRootComponent { }