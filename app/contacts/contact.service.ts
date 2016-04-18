import {Injectable} from 'angular2/core';
import {Contact} from './contact';
import {CONTACTS} from './contacts.mock';
import {Utils} from './../_shared/utils';

@Injectable()
export class ContactService {

    getContact(id: number) {
        return Promise.resolve(CONTACTS.find(n => n.id == id));
    }

    getContacts() {
        return Promise.resolve(CONTACTS);
    }

    public saveContact(contact: Contact) {

        //let i = CONTACTS.findIndex(n => n.id == contact.id);
        //this.contacts[i] = contact;
      
        return new Promise<boolean>((resolve, reject) => {
            setTimeout(function() {
              resolve(true);
            }, 5000);
        });
      
        //return Promise.resolve(true);
    }
    
    // private _contacts = [];
    // private get contacts(): Contact[] {
    //     let contacts: Contact[] = <Contact[]>JSON.parse(localStorage.getItem('contacts')) || [];

    //     if (contacts.length == 0) {

    //         contacts.push({ id: 1019, name: 'Iuri André Stona', phone: '4699820025', email: 'istona@gmail.com' });
    //         this.contactList.forEach(el => {
    //             contacts.push({ id: parseInt(el.id), name: el.nome, phone: el.phone, email: el.email });
    //         });

    //         //contacts = contacts.sort((a, b) => a.name > b.name ? 1 : a.name < b.name ? -1 : 0);

    //         contacts = Utils.orderBy(contacts, n => n.name);
            
    //         localStorage.setItem('contacts', JSON.stringify(contacts));
    //     }

    //     console.log(JSON.stringify(contacts));

    //     return contacts;
    // }


}