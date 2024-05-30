import { Address } from './address';
import { CurrentAccount } from './currentAccount';
import { SavingAccount } from './savingAccount';

export class Client {
    id?: number;
    firstName: string = '';
    lastName: string = '';
    address: Address = new Address();
    noTel: string = '';
    currentAccount: CurrentAccount = new CurrentAccount();
    savingAccount: SavingAccount = new SavingAccount();

    constructor(data: Partial<Client> = {}) {
        Object.assign(this, data);
    }
}
