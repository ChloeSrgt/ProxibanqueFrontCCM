import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ClientService } from '../../services/client.service';
import { Client } from '../../model/client';
import { InfoAccount } from '../../model/InfoAccount';
import { CurrentAccount } from '../../model/currentAccount';

@Component({
  selector: 'app-client-account',
  templateUrl: './client-account.component.html',
  styleUrls: ['./client-account.component.css']
})
export class ClientAccountComponent implements OnInit {
  client: Client = {
    id: 0,
    firstName: '',
    lastName: '',
    address: {
      street: '',
      postalCode: '',
      city: ''
    },
    noTel: '',
    currentAccount: {
      id: 0,
      infoAccount: {
        numAccount: '',
        solde: 0,
        openDate: ''
      },
      overDrawn: 0,
    },
    savingAccount: {
      id: 0,
      infoAccount: {
        numAccount: '',
        solde: 0,
        openDate: ''
      },
      payRate: 0,
    },
  };

  constructor(
    private route: ActivatedRoute,
    private clientService: ClientService
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.clientService.getClient(id).subscribe(client => this.client = client);
  }
}
