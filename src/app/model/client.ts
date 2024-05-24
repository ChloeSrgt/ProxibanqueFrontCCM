import { Address } from './address';
import { BankAccount } from './BankAccount';
import { CurrentAccount } from './currentAccount';
import { SavingAccount } from './savingAccount';

export class Client {
    id: number = 0;
    firstName: string = '';
    lastName: string = '';
    address: Address = new Address();
    noTel: string = '';
    currentAccount: CurrentAccount = new CurrentAccount();
    savingAccount: SavingAccount = new SavingAccount();
}
