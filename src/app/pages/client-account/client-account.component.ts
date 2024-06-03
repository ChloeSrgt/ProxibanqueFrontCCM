import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ClientService } from '../../services/client.service';
import { MatDialog } from '@angular/material/dialog';
import { BankTransferModalComponent } from '../../bank-transfer-modal/bank-transfer-modal.component';
import { TransferService } from '../../services/transfer.service';

@Component({
  selector: 'app-client-account',
  templateUrl: './client-account.component.html',
  styleUrls: ['./client-account.component.css']
})
export class ClientAccountComponent implements OnInit {
  client: any;

  constructor(
    private route: ActivatedRoute,
    private clientService: ClientService,
    private transferService: TransferService,
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.clientService.getClient(id).subscribe(client => this.client = client);
  }

  openTransferModal(fromAccount: string, toAccount: string): void {
    const dialogRef = this.dialog.open(BankTransferModalComponent, {
      width: '400px',
      data: {
        fromAccount,
        toAccount,
        fromAccountId: this.client.currentAccount.id,
        toAccountId: this.client.savingAccount.id
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.clientService.getClient(this.client.id).subscribe(client => this.client = client);
      }
    });
  }
}
