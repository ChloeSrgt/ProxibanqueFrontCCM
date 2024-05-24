import { Address } from './address';
import { BankAccount } from './BankAccount';

export class Client {
    id: number = 0;
    firstName: string = '';
    lastName: string = '';
    address: Address = new Address();  
    noTel: string = '';
    listAccount: BankAccount[] = []; 
}
