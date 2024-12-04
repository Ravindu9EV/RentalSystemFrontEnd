export class Item {
  private rentID: number;
  private name: string;
  private rentalPerDay: number;
  private finePerDay: number;
  private availability: boolean;

  constructor(
    rentID: number,
    name: string,
    rentalPerDay: number,
    finePerDay: number,
    availability: boolean
  ) {
    this.rentID = rentID;
    this.name = name;
    this.rentalPerDay = rentalPerDay;
    this.finePerDay = finePerDay;
    this.availability = availability;
  }

  public getRentID(): number {
    return this.rentID;
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
