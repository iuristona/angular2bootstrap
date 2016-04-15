import {Component} from 'angular2/core';
import {DROPDOWN_DIRECTIVES} from 'ng2-bootstrap/ng2-bootstrap';
import {ROUTER_DIRECTIVES} from 'angular2/router';
import {UtilsService} from './../_shared/utils.service';
import * as moment_ from 'moment';
const moment: moment.MomentStatic = (<any>moment_)['default'] || moment_;

@Component({
    selector: 'navbar',
    directives: [DROPDOWN_DIRECTIVES, ROUTER_DIRECTIVES],
    providers: [UtilsService],
    //moduleId: module.id,
    templateUrl: './app/navbar/navbar.template.html'
})
export class NavbarComponent {
  
    currentStatus: 'fixed' | 'static' | 'default' = 'static';
    today = moment(new Date()).format('dddd, DD [de] MMMM [de] YYYY');

    constructor(private _utils: UtilsService) { }
    
    changeNavbar(status: 'fixed' | 'static' | 'default') {
        this.currentStatus = status;      
    }

    isActive(linkParams: any[]) {
        return this._utils.isRouteActive(linkParams);
    }

}