import { Component } from '@angular/core';
import { ClientService } from '../../services/client.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Client } from '../../model/client';
import { Address } from '../../model/address';

// client info page with client info details  
@Component({
  selector: 'app-client-info',
  templateUrl: './client-info.component.html',
  styleUrl: './client-info.component.css'
})
export class ClientInfoComponent {
  id = this.activatedRoute.snapshot.params['id'];
  clientInfo: any = {};

  constructor( private service: ClientService, private activatedRoute: ActivatedRoute, private router: Router) {
    this.clientInfo = new Client();
    this.clientInfo.address = new Address();
}

ngOnInit() {
  this.service.getClient(this.id).subscribe((data: {}) => {
    this.clientInfo = data;
  })
}


}
