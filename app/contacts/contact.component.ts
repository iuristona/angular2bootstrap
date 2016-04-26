import {Component, OnInit} from 'angular2/core';
import {Location, Router, RouteParams, ROUTER_DIRECTIVES} from 'angular2/router';
import {TAB_DIRECTIVES} from 'ng2-bootstrap/ng2-bootstrap';
import {Contact} from './contact';
import {ContactService} from './contact.service';
import {PhoneMask} from './../_shared/phonemask.directive';
import {InputMask} from './../_shared/inputmask.directive';
import {PhonePipe} from './../_shared/phone.pipe';
import {EmailValidator} from './../_shared/email.validator';


@Component({
    selector: 'contact',
    directives: [TAB_DIRECTIVES, ROUTER_DIRECTIVES, PhoneMask, InputMask, EmailValidator],
    providers: [ContactService],
    pipes: [PhonePipe],
    templateUrl: './app/contacts/contact.component.html'
})
export class ContactComponent implements OnInit { 
    tabs = {
        profile: true,
        photo: false,
        address: false
    };
    rootTab = 'profile';    
    currentTab = this.rootTab;
    contact: Contact = { id: 0, name: '', phone: '', email: '' };
    
    submitted = true;
    
    constructor(private _contactService: ContactService, private _router: Router, private _location: Location, private _routeParams: RouteParams) { }
    
    ngOnInit() {
        let id = parseInt(this._routeParams.get('id'));
        this.contact.id = id;
        this._contactService.getContact(id).then(contact => this.contact = contact || this.contact);

        this.setTabsFromRoute();
    }
    
    onSubmit(form) {
        this._contactService.saveContact(this.contact).then(r => this.submitted = r); 
    }
    
    setTabsFromRoute() {
        let tab = this._routeParams.get('tab') || this.rootTab;
        for (var key in this.tabs) {
            this.tabs[key] = (key === tab);
        }       
        if (this.tabs.hasOwnProperty(tab)) {
            this.currentTab = tab;
        } else {
            this._router.navigate(['Contact', {id: this.contact.id}]);
        }
    }
    
    tabOnSelected(tab) {
        let path = this._router.generate(['Contact', {id: this.contact.id}]).toUrlPath();        
        if (tab !== this.rootTab) {
            path += '/' + tab
        }        
        this._location.replaceState(path);
    }
    
}