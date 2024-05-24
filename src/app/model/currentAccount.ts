import { InfoAccount } from "./InfoAccount";
import { Client } from "./client";

export class CurrentAccount {
  id: number = 0;
  infoAccount: InfoAccount = new InfoAccount();
  overDrawn: number = 0;
}
