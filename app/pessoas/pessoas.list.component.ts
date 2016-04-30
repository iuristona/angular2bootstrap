import {Component, OnInit} from 'angular2/core';
import {ROUTER_DIRECTIVES} from 'angular2/router';
import {PessoasService} from './pessoas.service';


@Component({
    selector: 'contacts',
    directives: [ROUTER_DIRECTIVES], 
    providers: [PessoasService],
    pipes: [],
    template: `   
<h1>Pessoas Listagem</h1>
    
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
    <tr *ngFor="let m of list | async">
      <th scope="row">{{ m.id }}</th>
    </tr>
  </tbody>
</table>
    
    `
})
export class PessoasListComponent implements OnInit {
    
    //contacts: Contact[] = [];
    list: Promise<any[]>;
     
    constructor(private _contactService: PessoasService) { }
    
    ngOnInit() {
        //this.loadContacts();
        
        console.log('aqui');
        
        this._contactService.getAll().map(n => n.text()).subscribe(
            d => { console.log(d); 
                let pdf = new Blob([d], { type: 'application/pdf' });
                //let file = new File([pdf], 'meupdf.pdf');
                
                //console.log(file);
                
                window.open(URL.createObjectURL(pdf));
                
                
                //window.URL.revokeObjectURL(pdf);
                
                //console.log(d);
                
                //console.log(pdf);
                
            },
            error => { console.log(error) }
        );
    }
    
    // loadContacts() {
    //     this._contactService.getContacts().then(contacts => this.contacts = contacts);
    // }
}