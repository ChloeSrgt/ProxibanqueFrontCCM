import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { TransferService } from '../services/transfer.service';

@Component({
  selector: 'app-bank-transfer-modal',
  templateUrl: './bank-transfer-modal.component.html',
  styleUrls: ['./bank-transfer-modal.component.css']
})
export class BankTransferModalComponent {
  fromAccount: string;
  toAccount: string;
  amount: number = 0;
  errorMessage: string | null = null;

  constructor(
    public dialogRef: MatDialogRef<BankTransferModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private transferService: TransferService
  ) {
    this.fromAccount = data.fromAccount;
    this.toAccount = data.toAccount;
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  toggleDirection(): void {
    const temp = this.fromAccount;
    this.fromAccount = this.toAccount;
    this.toAccount = temp;
  }

  submitTransfer(): void {
    this.errorMessage = null;

    if (this.amount <= 0) {
      this.errorMessage = 'Transfer amount must be positive';
      return;
    }

    const fromAccountId = this.data.fromAccountId;
    const toAccountId = this.data.toAccountId;

    this.transferService.transfer(this.amount, fromAccountId, toAccountId).subscribe(
      response => {
        this.dialogRef.close({ success: true });
      },
      error => {
        this.errorMessage = error.error.message || 'An error occurred';
        console.error('Transfer failed', error);
      }
    );
  }
}
