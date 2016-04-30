import {Component, OnInit} from 'angular2/core';
import {ROUTER_DIRECTIVES} from 'angular2/router';
import {ContactService} from './contact.service';
import {Contact} from './contact';
import {PhonePipe} from './../_shared/custom.pipes';


@Component({
    selector: 'contacts',
    directives: [ROUTER_DIRECTIVES],
    providers: [ContactService],
    pipes: [PhonePipe],
    template: `   
<h1>Contacts Component</h1>
    
<table class="table table-condensed">
  <thead>
    <tr>
      <th>#</th>
      <th>Name</th>
      <th>Phone</th>
      <th>Email</th>
    </tr>
  </thead>
  <tbody>
    <tr *ngFor="let contact of contacts | async">
      <th scope="row">{{ contact.id }}</th>
      <td><a [routerLink]="['Contact', {id: contact.id}]">{{contact.name}}</a></td>
      <td>{{ contact.phone | phone }}</td>
      <td>{{ contact.email }}</td>
    </tr>
  </tbody>
</table>
    
    `
})
export class ContactsComponent implements OnInit {
    
    //contacts: Contact[] = [];
    contacts: Promise<Contact[]>;
     
    constructor(private _contactService: ContactService) { }
    
    ngOnInit() {
        //this.loadContacts();
        
        this.contacts = this._contactService.getContacts();
    }
    
    // loadContacts() {
    //     this._contactService.getContacts().then(contacts => this.contacts = contacts);
    // }
}