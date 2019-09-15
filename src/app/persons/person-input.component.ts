import {Component} from '@angular/core';

@Component({
  // tslint:disable-next-line:component-selector
    selector : 'person-input',
    templateUrl : './person-input.component.html',
})

export class PersonInputComponent {
  addPerson(personName: string) {
    console.log('person Created : ' + personName);
  }
}

