import { Component, Input } from '@angular/core';

@Component({
    selector: 'navbar',
    templateUrl: './navbar.component.html'
})
export class NavbarComponent{
    @Input() page: Pages;
}

export enum Pages{
    HOME = 0,
    ADMIN_LOGIN = 1
}