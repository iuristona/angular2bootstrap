import {Component} from 'angular2/core';
import {ROUTER_DIRECTIVES, RouteConfig} from 'angular2/router';
import {CustomersListComponent} from './customers-list.component';


@RouteConfig([
    { path: '/', name: 'CustomersList', component: CustomersListComponent, useAsDefault: true }
    // { path: '/:id', name: 'PessoasList', component: ContactComponent },
    // { path: '/:id/:tab', name: 'ContactSetTab', component: ContactComponent }
])

@Component({
    selector: 'customers',
    directives: [ROUTER_DIRECTIVES], 
    template: `


    <div class="panel panel-default">
      <div class="panel-heading">
        <h1>Customers</h1>
      </div>
      <div class="panel-body">
        <router-outlet></router-outlet>
      <div>
    </div>

`
})
export class CustomersComponent { }