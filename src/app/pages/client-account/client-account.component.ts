import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ClientService } from '../../services/client.service';
import { Client } from '../../model/client';
import { InfoAccount } from '../../model/InfoAccount';
import { CurrentAccount } from '../../model/currentAccount';
// import { Card } from '../../model/card';

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
    card: {
      numCard: '',
      expirationDate: '',
      cardType: ''
    }
  };

  constructor(
    private route: ActivatedRoute,
    private clientService: ClientService
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.clientService.getClient(id).subscribe(client => {
      this.client = client;
      if (!this.client.card.cardType) {
        this.client.card.cardType = this.getRandomCardType();
      }
      if (!this.client.card.numCard) {
        this.client.card.numCard = this.getRandomCardNumber();
      }
      if (!this.client.card.expirationDate) {
        this.client.card.expirationDate = this.getRandomExpirationDate();
      }
    });
  }

  getRandomCardType(): string {
    const cardTypes = ['Visa Premium', 'Visa Electron'];
    return cardTypes[Math.floor(Math.random() * cardTypes.length)];
  }

  getRandomCardNumber(): string {
    let numCard = '';
    for (let i = 0; i < 16; i++) {
      numCard += Math.floor(Math.random() * 10).toString();
    }
    return numCard;
  }


  getRandomExpirationDate(): string {
    const month = Math.floor(Math.random() * 12) + 1;
    const year = new Date().getFullYear() + Math.floor(Math.random() * 10);
    const formattedMonth = month < 10 ? '0' + month : month;
    return formattedMonth + '/' + year;
  }
}
