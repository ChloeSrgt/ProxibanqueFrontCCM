import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-bank-transfer-modal',
  templateUrl: './bank-transfer-modal.component.html',
  styleUrls: ['./bank-transfer-modal.component.css']
})
export class BankTransferModalComponent {
  fromAccount: string;
  toAccount: string;
  amount: number = 0;

  constructor(
    public dialogRef: MatDialogRef<BankTransferModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.fromAccount = data.fromAccount;
    this.toAccount = data.toAccount;
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  toggleDirection(): void {
    [this.fromAccount, this.toAccount] = [this.toAccount, this.fromAccount];
  }

  submitTransfer(): void {
    this.dialogRef.close({ amount: this.amount, fromAccount: this.fromAccount, toAccount: this.toAccount });
  }
}
