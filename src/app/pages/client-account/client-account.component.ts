import { Component } from '@angular/core';

@Component({
  selector: 'app-client-account',
  templateUrl: './client-account.component.html',
  styleUrl: './client-account.component.css'
})
export class ClientAccountComponent {

  client = {
    firstName: 'Bakary',
    lastName: 'Sagnat',
    listAccount: [
      { type: 'Current account', numAccount: '12345', solde: 3000 },
      { type: 'Saving account', numAccount: '67890', solde: 10000 }
    ],
  };

}
