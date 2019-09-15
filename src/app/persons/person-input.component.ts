import {Component, Output, EventEmitter} from '@angular/core';

@Component({
  // tslint:disable-next-line:component-selector
    selector : 'person-input',
    templateUrl : './person-input.component.html',
})

export class PersonInputComponent {
  @Output() personCreate = new EventEmitter <string>();
  personName = '';
  addPerson() {
    console.log('person Created : ' + this.personName);
    this.personCreate.emit(this.personName);
    this.personName = '';
  }
}

