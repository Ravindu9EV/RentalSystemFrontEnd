export class Customer {
  private customerID: number;
  private name: string;
  private contact: string;
  private city: string;

  constructor(customerID: number, name: string, contact: string, city: string) {
    this.customerID = customerID;
    this.name = name;
    this.contact = contact;
    this.city = city;
  }

  public getCustomerID(): number {
    return this.customerID;
  }
  public getName(): string {
    return this.name;
  }
  public getContact(): string {
    return this.contact;
  }
  public getCity(): string {
    return this.city;
  }
}
