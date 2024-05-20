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
      { currentAccount: 'Current account' },
      { savingAccount: 'Saving account' },
      { testAccount: [
        { numAccount: '12345' },
        { solde: 3000 },
        { openDate: '20/20/2023' }
      ]
    }
    ]
  };

}
