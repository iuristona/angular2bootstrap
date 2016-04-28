import {Component, OnInit} from 'angular2/core';
import {ROUTER_DIRECTIVES} from 'angular2/router';
import {CustomersService} from './customers.service';
import {Utils, moment} from '../_shared/utils';
import {StringSafeDatePipe} from './../_shared/custom.pipes';
//import {KeyEventsPlugin} from 'angular2/src/platform/dom/events/key_events';

//import * as _ from 'underscore';

@Component({
    selector: 'customers',
    directives: [ROUTER_DIRECTIVES], 
    providers: [CustomersService],
    pipes: [StringSafeDatePipe],
    templateUrl: './app/customers/customers-list.component.html',
    styles: [`
        .btn-group-xs>.btn, .btn-xs {
            padding: 4px;
            font-size: 9px;
            border-radius: 1px;
        }
        .glyphicon {
            top: 0px;
        }        
        table:focus {
            outline: 0px;
        }
    `]    
})
export class CustomersListComponent implements OnInit {
    
    reverse = false;
    page = 1;
    pageSize = 10;
    pageSizes = [5, 10, 15, 20];
    pages = [];
    count = 0;
    totalPages = 0;    
    list = [];
    listOrigin = [];
    selected: any = {};
    selectedIndex = -1;   
    searchString = '';
    
    lastKey: string = '(none)';

     
    constructor(private _service: CustomersService) { }
    
    parseFloat(s) {
        return parseFloat(s);
    }
    
    parseDate(s) {
        return Date.parse(s);// new Date(s);
    }
    
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
            result => { 
                this.listOrigin = result.value;
                this.list = this.listOrigin;
                
                this.count = result['odata.count'];
                this.totalPages = (this.count / this.pageSize) | 0; // | 0 pega apenas a parte inteira do número
                
                this.search(this.searchString);
                
                this.pages = Array.from({ length: this.totalPages }, (v, i) => i + 1);
            },
            error => { 
                console.log(error); 
            }
        );
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
        this.searchString = s;
        this.list = this.listOrigin.filter(n => n.CompanyName.toLowerCase().indexOf(s.toLowerCase()) > -1);        
        //this.list = _.filter(this.listOrigin, n => n.CompanyName.toLowerCase().indexOf(s.toLowerCase()) > -1);        
    }
    
    sortBy(predicate) {
        this.reverse = !this.reverse;
        this.list = Utils.orderBy(this.list, n => n[predicate]);        
        if (this.reverse) {
            this.list = this.list.reverse();
        }
        this.selectedIndex = this.list.findIndex(n => n === this.selected);
    }
    
    expandItem(item) {
        item.expanded = !item.expanded;
    }
    
    keyPress(event) {
        console.log(event);        
    }
    
    onKeyDown(event) {
        this.lastKey = event.which;
        let key = event.which; 
        event.preventDefault();
        
        switch (key) {
            case 38: //'arrowup':
                this.selectedIndex--;
                this.selectItem(this.list[this.selectedIndex], this.selectedIndex);
                break;
            case 40: //'arrowdown':
                this.selectedIndex++;
                this.selectItem(this.list[this.selectedIndex], this.selectedIndex);
                break;
            case 37: //'arrowleft':
                if (this.selected) {
                    this.selected.expanded = false;
                }
                break;
            case 39: //'arrowright':
                if (this.selected) {
                    this.selected.expanded = true;
                }
                break;
        }
    }
}