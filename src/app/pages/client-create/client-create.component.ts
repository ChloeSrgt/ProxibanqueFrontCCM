import { Component, Input, Output } from '@angular/core';
import { ClientService } from '../../services/client.service';
import { Client } from '../../model/client';
import { CurrentAccount } from '../../model/currentAccount';
import { SavingAccount } from '../../model/savingAccount';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'app-client-create',
  templateUrl: './client-create.component.html',
  styleUrls: ['./client-create.component.css']
})
export class ClientCreateComponent {
  client: Client = new Client();



  public firstName = this.client.firstName;

  constructor(
    private clientService: ClientService,
    private router: Router,
    private snackBar: MatSnackBar
  ) {}

  onSubmit() {

    this.client.currentAccount = new CurrentAccount({
      infoAccount: {
        numAccount: this.generateRandomAccountNumber(),
        solde: 0,
        openDate: new Date().toISOString().split('T')[0] 
      },
      overDrawn: 1000
    });

    this.client.savingAccount = new SavingAccount({
      infoAccount: {
        numAccount: this.generateRandomAccountNumber(),
        solde: 0,
        openDate: new Date().toISOString().split('T')[0] // YYYY-MM-DD format
      },
      payRate: 0.03
    });

    this.clientService.createClient(this.client).subscribe(
      result => {
        this.showNotification('Client created successfully!', 'success');
        setTimeout(() => {
          this.router.navigate(['/client-list']);
        }, 2000); // Redirection après 2 secondes
      },
      error => {
        console.error('There was an error!', error);
        this.showNotification('Error creating client', 'error');
      }
    );
  }

  generateRandomAccountNumber(): string {
    return Math.floor(Math.random() * 10000000000).toString();
  }

  showNotification(message: string, type: string) {
    this.snackBar.open(message, 'Close', {
      duration: 2000,
      horizontalPosition: 'right',
      verticalPosition: 'top',
      panelClass: type === 'success' ? 'success-snackbar' : 'error-snackbar'
    });
  }
}
