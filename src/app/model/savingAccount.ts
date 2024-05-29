import { InfoAccount } from "./InfoAccount";
import { Client } from "./client";

export class SavingAccount {
  id?: number;
  infoAccount: InfoAccount = new InfoAccount();
  payRate: number = 0.03; 

  constructor(data: Partial<SavingAccount> = {}) {
    Object.assign(this, data);
  }
}
