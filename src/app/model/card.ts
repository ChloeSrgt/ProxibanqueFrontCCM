export class Card {
  id?: number;
  numCard: string = '';
  expirationDate: string = '';
  cardType: string = '';

  constructor(data: Partial<Card> = {}) {
    Object.assign(this, data);
}
}
