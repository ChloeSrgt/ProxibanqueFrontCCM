/* import { Component, OnInit } from '@angular/core';
import { ClientService } from '../servicesYann/client.service';

@Component({
  selector: 'app-client-list',
  templateUrl: './client-list.component.html',
  styleUrls: ['./client-list.component.css']
})
export class ClientListComponent implements OnInit {

  client: any = [];

  constructor(
    public service: ClientService
  ) { }

  ngOnInit() {
    this.loadClients()
  }


  loadClients() {
    return this.service.getClients().subscribe((data: {}) => { console.log(data);
      this.client = data;
    })
  }

  deleteClient(id:number) {
    if (window.confirm('Are you sure, you want to delete?')){
      this.service.deleteClient(id).subscribe(data => {
        this.loadClients()
      })
    }
  }

}
 */