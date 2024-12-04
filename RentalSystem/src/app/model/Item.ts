export class Item{
    private  rentID:number;
    private  rentalDate;
    private returnDate:string;
    private dueDate:string ;
    private fine:boolean ;
    private  totalCost:DoubleRange;
    private rentDetails: Array<Object>;

    constructor(rentID:number,rentalDate:string,returnDate:string, dueDate:string,fine:boolean,totalCost:DoubleRange,rentDetails: Array<Object>){
        this.rentID=rentID,
        this.rentalDate=rentalDate,
        this.returnDate=returnDate,
        this.dueDate=dueDate,
        this.fine=fine,
        this.totalCost=totalCost,
        this.rentDetails=rentDetails
    }

    public void 
}