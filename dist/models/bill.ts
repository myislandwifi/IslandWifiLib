export interface Bill{
    id:string;
    amountDue:number;
    state:BillState;
    dueDate:number;
    depositRequired:boolean;
    createdAt:number;
    description:string;
}


export enum BillState{
    unpaid="unpaid",
    paid="paid"
  }
  