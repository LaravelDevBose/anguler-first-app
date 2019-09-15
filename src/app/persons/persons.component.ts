import {Component} from '@angular/core';

@Component({
    selector : 'app-persons',
    templateUrl : './persons.component.html'
})

export class PersonsComponent {
    personList = ['Arup', 'Joy', 'Shuvo'];
    constructor() {}
}
