import {NgModule} from '@angular/core';
import {Routes, RouterModule } from '@angular/router';

import {PersonsComponent} from './persons/persons.component';
import {ServersComponent} from './servers/servers.component';


const routes: Routes = [
  { path: '' , component: PersonsComponent },
  { path: 'servers' , component: ServersComponent }
];

@NgModule({
  imports : [RouterModule.forRoot(routes)],
  exports : [RouterModule],
})
export class AppRoutingModule {

}
