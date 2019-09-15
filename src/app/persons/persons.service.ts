import {Injectable} from '@angular/core';
import { Subject } from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';

@Injectable({providedIn: 'root'})
export class PersonsService {
  personUpdate = new Subject<string[]>();
  personList: string[] = [];

  constructor(private http: HttpClient) {}
  fetchPersons() {
    this.http.get<any>('https://swapi.co/api/people/')
      .pipe(map(resData => {
        return resData.results.map(character => character.name);
      }))
      .subscribe(transformData => {
        console.log(transformData);
        this.personUpdate.next(transformData);
      });
  }
  personCreate(personName: string) {
    this.personList.push(personName);
    this.personUpdate.next(this.personList);
  }
  personRemove(name: string) {
    this.personList = this.personList.filter(person => {
      return person !== name;
    });
    this.personUpdate.next(this.personList);
  }
}
