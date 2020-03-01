import { Component, OnInit} from '@angular/core'

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})

export class ServersComponent implements OnInit {

  allowNewServer = false;
  serverCreationStatus = 'No server was created !';
 
  serverName = 'TestngModel';

  userName = '';
  hindUsername = true;

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  ngOnInit() {


  }
  onCreateServer() {
    this.serverCreationStatus = 'Server was created ! And Name is ' + this.serverName ;
  }


  onUpdateServerName(event: Event) {
    console.log(event)
    this.serverName = (<HTMLInputElement>event.target).value;
  }

  buttonOn(event: Event) {
    this.hindUsername = false;
    
  }


  resetName() {
    //this.hindUsername = false;
    this.userName = '';
  }


}


