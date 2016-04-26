import {Component} from 'angular2/core';
import {ROUTER_DIRECTIVES, RouteConfig} from 'angular2/router';
import {PessoasListComponent} from './pessoas.list.component';


@RouteConfig([
    { path: '/', name: 'PessoasList', component: PessoasListComponent, useAsDefault: true }
    // { path: '/:id', name: 'PessoasList', component: ContactComponent },
    // { path: '/:id/:tab', name: 'ContactSetTab', component: ContactComponent }
])

@Component({
    selector: 'pessoas',
    directives: [ROUTER_DIRECTIVES], 
    template: `


    <div class="panel panel-default">
      <div class="panel-heading">
        <h1>Pessoas</h1>
      </div>
      <div class="panel-body">
        <router-outlet></router-outlet>
      <div>
    </div>

`
})
export class PessoasComponent { }