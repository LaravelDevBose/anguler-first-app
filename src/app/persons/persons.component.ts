import {Component, OnInit} from '@angular/core';
import {PersonsService} from './persons.service';

@Component({
    selector : 'app-persons',
    templateUrl : './persons.component.html'
})

export class PersonsComponent implements OnInit {
    personList: string[];
    // private  personService: PersonsService; // adding service
    constructor( private perService: PersonsService) {
        // this.personList = perService.personList;
        // this.personService = perService;
    }
    ngOnInit() {
      this.personList = this.perService.personList;
    }
}
