import { InfoAccount } from "./InfoAccount";
import { Client } from "./client";

export class CurrentAccount {
  id?: number;
  infoAccount: InfoAccount = new InfoAccount();
  overDrawn: number = 1000;

  constructor(data: Partial<CurrentAccount> = {}) {
    Object.assign(this, data);
  }
}
