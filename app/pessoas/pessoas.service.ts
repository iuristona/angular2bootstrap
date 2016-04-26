import {Injectable} from 'angular2/core';
import {Http} from 'angular2/http';

@Injectable()
export class PessoasService {
    constructor(private _http: Http) { }
    get(id: number) {
        return Promise.resolve(true);
    }

    getAll() {
        let h = this._http.get('http://www.wiip.com.br/boleto/emitir/1317765?usuario=stona50&key=wEPDwUMz');
        return h;
                
    }

    public save(model: any) {
      
        // return new Promise<boolean>((resolve, reject) => {
        //     setTimeout(function() {
        //       resolve(true);
        //     }, 500);
        // });
      
        return Promise.resolve(true);
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