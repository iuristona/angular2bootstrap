import {Component, OnInit} from 'angular2/core';
import {ROUTER_DIRECTIVES} from 'angular2/router';
import {CustomersService} from './customers.service';
import {Utils} from '../_shared/utils';
import * as _ from 'underscore';

@Component({
    selector: 'customers',
    directives: [ROUTER_DIRECTIVES], 
    providers: [CustomersService],
    pipes: [],
    template: `   
<div (keydown.space)="keyPress($event)">
<h1>Pessoas Listagem</h1>

<pre class="form-inline"><input type="text" [ngModel]="s" (ngModelChange)="search($event)" class="form-control" /> <select [ngModel]="pageSize" (ngModelChange)="changePageSize($event)" class="form-control">
        <option *ngFor="#o of pageSizes" [value]="o">{{o}}</option>
    </select> Sorting predicate = {{predicate}}; reverse = {{reverse}} Page: {{page}} / {{totalPages}} aqui vai count {{count}} {{selected?.CustomerID}} {{selectedIndex}}</pre>
<table class="table table-condensed" >
  <thead>
    <tr>
      <th>#</th>
      
      <th>
        <a role="button" (click)="sortBy('CompanyName')">CompanyName</a>
        <span *ngIf="reverse" style="font-size: 10px;" class="glyphicon glyphicon-chevron-up"></span>
        <span *ngIf="!reverse" style="font-size: 10px;" class="glyphicon glyphicon-chevron-down"></span>
      </th>

      <th>ContactName</th>
      <th>ContactTitle</th>
      <th>City</th>
    </tr>
  </thead>
  <tbody>
    <tr *ngFor="#m of list" (click)="selectItem(m, $index)" [ngClass]="{info: m.CustomerID == selected?.CustomerID}">
      <th scope="row">{{ m.CustomerID }}</th>
      <td>{{ m.CompanyName }}</td>
      <td>{{ m.ContactName }}</td>
      <td>{{ m.ContactTitle }}</td>
      <td>{{ m.City }}</td>
    </tr>
  </tbody>
  <tfoot>
    <tr>
      <td colspan="6">{{ list.length }}</td>
    </tr>
  </tfoot>

</table>

<ul class="pagination">
  <li [ngClass]="{disabled: page == 1}"><a (click)="changePage(page-1)" role="button">&laquo;</a></li>
  
  <li [ngClass]="{disabled: page == totalPages}"><a (click)="changePage(page+1)" role="button">&raquo;</a></li>
</ul>
</div>
    `
})
export class CustomersListComponent implements OnInit {
    
    reverse = false;
    page = 1;
    pageSize = 10;
    pageSizes = [5, 10, 15, 20];
    count = 0;
    totalPages = 0;    
    list = [];
    listo = [];
    selected = {};
    selectedIndex = -1;
    s = '';
     
    constructor(private _service: CustomersService) { }
    
    ngOnInit() {
        this.loadData();        
    }
    
    loadData() {
        this._service.getAll({
            $inlinecount: 'allpages',
            $top: this.pageSize,
            $skip: (this.page - 1) * this.pageSize,
            $expand: 'Orders',
            $select: 'CustomerID,CompanyName,ContactName,ContactTitle,City,Orders/OrderID,Orders/OrderDate,Orders/Freight,Orders/ShipName'
        }).map(n => n.json()).subscribe(
            d => { 
                console.log(d);
                this.listo = d.value;
                this.list = this.listo;
                
                this.count = d['odata.count'];
                this.totalPages = (this.count / this.pageSize) | 0; // | 0 pega apenas a parte inteira do número
                
                this.search(this.s);

            },
            error => { console.log(error) }
        );
        
        //this.search('b');
    }
    
    changePageSize(event) {
        this.pageSize = event;
        this.loadData();
    }
    
    changePage(n) {
        if (n < 1 || n > this.totalPages)
            return;
        this.page = n;
        this.loadData();
    }

    selectItem(item, index) {
        console.log(item);
        if (this.selected == item) {
            this.selected = undefined;
            this.selectedIndex = -1;
        } else {
            this.selected = item;
            this.selectedIndex = index;
        }
    }
    
    search(s: string) {
        this.s = s;
        this.list = this.listo.filter(n => n.CompanyName.toLowerCase().indexOf(s.toLowerCase()) > -1);        
        //this.list = _.filter(this.listo, n => n.CompanyName.toLowerCase().indexOf(s.toLowerCase()) > -1);
        
    }
    
    sortBy(predicate) {
        this.reverse = !this.reverse;
        this.list = Utils.orderBy(this.list, n => n[predicate]);        
        if (this.reverse) {
            this.list = this.list.reverse();
        }
    }
    
    keyPress(event) {
        console.log(event);
    }
    
    // loadContacts() {
    //     this._contactService.getContacts().then(contacts => this.contacts = contacts);
    // }
}