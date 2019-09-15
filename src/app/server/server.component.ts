import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html' ,
  styles: [`
    .online {
        border-radius: 5px;
    }
  `],
})
export class ServerComponent {
    serverStatus = 'Offline';
    @Input() server = [];
    @Input() serverId = [];
    constructor() {
      this.serverStatus = Math.random() > 0.5 ? 'Online' : 'Offline';
    }
    getServerStatus() {
      return this.serverStatus;
    }
    getColor() {
      return this.serverStatus === 'Online' ? 'green' : 'red';
    }

}
