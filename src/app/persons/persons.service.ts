import {Injectable} from '@angular/core';

@Injectable({providedIn: 'root'})
export class PersonsService {
  personList = ['Arup', 'Joy', 'Shuvo'];

  personCreate(personName: string) {
    this.personList.push(personName);
  }
}
