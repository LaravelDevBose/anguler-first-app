import {Component, OnDestroy, OnInit} from '@angular/core';
import {PersonsService} from './persons.service';
import { Subscription } from 'rxjs';

@Component({
    selector : 'app-persons',
    templateUrl : './persons.component.html'
})

export class PersonsComponent implements OnInit, OnDestroy {
    personList: string[];
    private personListSubs = Subscription;
    // private  personService: PersonsService; // adding service
    constructor( private perService: PersonsService) {
        // this.personList = perService.personList;
        // this.personService = perService;
    }
    ngOnInit() {
      // this.personList = this.perService.personList;
      // @ts-ignore
      this.personListSubs = this.perService.personUpdate.subscribe(personList => {
            this.personList = personList;
          });
      this.perService.fetchPersons();
    }
    removePerson(name: string) {
      this.perService.personRemove(name);
      console.log(name);
    }
    ngOnDestroy() {
      this.personListSubs.unsubscribe();
    }
}
