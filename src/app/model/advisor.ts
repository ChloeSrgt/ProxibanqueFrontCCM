import { Client } from "./client";

export class Advisor {
  lastName: string = '';
  firstName: string = '';
  email: string = '';
  clients: Client[] = [];

  constructor(data: Partial<Advisor> = {}) {
    Object.assign(this, data);
  }
}
