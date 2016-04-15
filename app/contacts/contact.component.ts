import {Component} from 'angular2/core';
import {Location, Router, RouteParams} from 'angular2/router';
import {TAB_DIRECTIVES} from 'ng2-bootstrap/ng2-bootstrap';
import {Contact} from './contact';
import {ContactService} from './contact.service';


@Component({
    selector: 'contact',
    directives: [TAB_DIRECTIVES],
    providers: [ContactService],
    template: `
    
<h1>Contact Component {{ contact.id }}</h1>
<h3>{{ contact.name }}</h3>
<h5>{{ contact.email }} {{ contact.phone }}</h5>
<tabset>
    <tab (select)="tabOnSelected('profile')" [active]="tabs.profile" heading="Profile">Justified content</tab>
    <tab (select)="tabOnSelected('photo')" [active]="tabs.photo" heading="Photo">Short Labeled Justified content</tab>
    <tab (select)="tabOnSelected('address')" [active]="tabs.address" heading="Address">Long Labeled Justified content</tab>
</tabset>
    `
})
export class ContactComponent { 
    tabs = {
        profile: true,
        photo: false,
        address: false
    };
    rootTab = 'profile';    
    currentTab = this.rootTab;
    
    contact: Contact = { id: 0, name: '' };
    

    constructor(private _contactService: ContactService, private _router: Router, private _location: Location, private _routeParams: RouteParams) { }
    
    ngOnInit() {
        let id = parseInt(this._routeParams.get('id'));
        this.contact.id = id;
        this._contactService.getContact(id).then(contact => this.contact = contact);

        this.setTabsFromRoute();
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