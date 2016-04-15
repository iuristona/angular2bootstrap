import {Component, OnInit} from 'angular2/core';
import {ROUTER_DIRECTIVES} from 'angular2/router';
import {ContactService} from './contact.service';
import {Contact} from './contact';


@Component({
    selector: 'contacts',
    directives: [ROUTER_DIRECTIVES], 
    providers: [ContactService],
    template: `<h1>Contacts Component</h1><a [routerLink]="['Contact', {id: 1019}]">Contact</a>
    
    <ul>
        <li *ngFor="#contact of contacts"><a [routerLink]="['Contact', {id: contact.id}]">{{contact.name}}</a></li>
    </ul>
    
    
    `
})
export class ContactsComponent implements OnInit {
    
    contacts: Contact[] = [];
     
    constructor(private _contactService: ContactService) { }
    
    ngOnInit() {
        this.loadContacts();
    }
    
    loadContacts() {
        this._contactService.getContacts().then(contacts => this.contacts = contacts);
    }
}