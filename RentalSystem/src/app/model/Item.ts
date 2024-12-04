export class Item {
  private itemID: number;
  private name: string;
  private rentalPerDay: number;
  private finePerDay: number;
  private availability: boolean;

  constructor(
    itemID: number,
    name: string,
    rentalPerDay: number,
    finePerDay: number,
    availability: boolean
  ) {
    this.itemID = itemID;
    this.name = name;
    this.rentalPerDay = rentalPerDay;
    this.finePerDay = finePerDay;
    this.availability = availability;
  }

  public getItemID(): number {
    return this.itemID;
  }
  public getName(): string {
    return this.name;
  }
  public getrentalPerDay(): number {
    return this.rentalPerDay;
  }
  public getFinePerDay(): number {
    return this.finePerDay;
  }
  public getAvailaility(): boolean {
    return this.availability;
  }
}
