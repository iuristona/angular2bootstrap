import {Component, OnInit} from 'angular2/core';
import {DROPDOWN_DIRECTIVES} from 'ng2-bootstrap/ng2-bootstrap';
import {ROUTER_DIRECTIVES} from 'angular2/router';
import {UtilsService} from './../_shared/utils.service';
import {moment} from './../_shared/utils';

type Status = 'fixed' | 'static' | 'default';

@Component({
    selector: 'navbar',
    directives: [DROPDOWN_DIRECTIVES, ROUTER_DIRECTIVES],
    providers: [UtilsService],
    //moduleId: module.id,
    templateUrl: './app/navbar/navbar.component.html'
})
export class NavbarComponent implements OnInit {
    
    currentStatus: Status = 'static';
    today: string = this.todayString;

    constructor(private _utils: UtilsService) { }
    
    ngOnInit() {
        setInterval(() => {
            this.today = this.todayString;
        }, 1000);
    }
    
    get todayString() {
        return moment(new Date()).format('dddd, DD [de] MMMM [de] YYYY HH:mm:ss');
    }
    
    changeNavbar(status: Status) {
        this.currentStatus = status;
    }

    isActive(linkParams: any[]) {
        return this._utils.isRouteActive(linkParams);
    }


}