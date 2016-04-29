import {Injectable} from 'angular2/core';
import {Http, Headers, URLSearchParams} from 'angular2/http';
import {Observable} from 'rxjs/Observable';


@Injectable()
export class CustomersService {
    constructor(private _http: Http) { }
    get(id: number) {
        return Promise.resolve(true);
    }

    getAll(params?: any) {
        let search: URLSearchParams = new URLSearchParams();

        for (let key in params) {
            search.set(key, params[key])
        }

        let headers = new Headers();
        //headers.append('Content-Type', 'application/x-www-form-urlencoded');
        headers.set('Accept', 'application/json, text/plain, */*');

        return this._http.get('http://services.odata.org/Northwind/Northwind.svc/Customers', {
            headers: headers,
            search: search
        }).map(n => n.json()
        ).catch(this.handleError);
    }

    public save(model: any) {

        // return new Promise<boolean>((resolve, reject) => {
        //     setTimeout(function() {
        //       resolve(true);
        //     }, 500);
        // });

        return Promise.resolve(true);
    }

    private handleError(error: any) {
        // In a real world app, we might send the error to remote logging infrastructure
        let errMsg = error.message || 'Server error';
        console.error(errMsg); // log to console instead
        return Observable.throw(errMsg);
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