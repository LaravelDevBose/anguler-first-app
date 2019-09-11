import { Component, OnInit } from '@angular/core';

// @ts-ignore
@Component({
  // tslint:disable-next-line:component-selector
  selector: 'app-servers',
  // selector: '[app-servers]', // atribute selector
  // tslint:disable-next-line:component-selector
  // selector: '.app-servers',
  // template: `
  //   <app-server></app-server>
  //   <app-server></app-server>
  // `,
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = 'No Server Was Created.!';
  serverName = '';

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  ngOnInit() {
  }
  onServerCreated() {
    this.serverCreationStatus = 'Server was Created. Server Name is ' + this.serverName;
  }

  onUpdateServerName(event: Event) {
    this.serverName = (event.target as HTMLInputElement).value;
  }

}
