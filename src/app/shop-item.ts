export type ShoppingItem = {
  id: string | null;
  number: number | null;
  name: string | null;
  description: string | null;
  price: number | null;
  currency: string | null;
  pictureUrl: string | null;
}

export class ShoppingItemObject implements ShoppingItem {
  id: string | null;
  number: number | null;
  name: string | null;
  description: string | null;
  price: number | null;
  currency: string | null;
  pictureUrl: string | null;

  constructor(
    id: string | null,
    number: number | null,
    name: string | null,
    description: string | null,
    price: number | null,
    currency: string | null,
    pictureUrl: string | null
  ) {
    this.id = id;
    this.number = number;
    this.name = name;
    this.description = description;
    this.price = price;
    this.currency = currency;
    this.pictureUrl = pictureUrl;
  }
}
