import {Component} from '@angular/core';
import {PersonsService} from './persons.service';

@Component({
  // tslint:disable-next-line:component-selector
    selector : 'person-input',
    templateUrl : './person-input.component.html',
})

export class PersonInputComponent {
  personName = '';
  constructor(private perService: PersonsService) {

  }
  addPerson() {
    console.log('person Created : ' + this.personName);
    this.perService.personCreate(this.personName);
    this.personName = '';
  }
}

