import { PaymentMethod } from './transaction';


export class Contract{
    id: string;
    signatureData:string;

    displayName: string;
    location:string;
    firstName: string;
    lastName: string;
    email: string;
    createdAt: number;
    updatedAt:number;
    endsAt: number;

    rentalCost: number;
    liabilityAmount: number;
    paymentMethod:PaymentMethod;
    stripePaymentSource: string;
    stripePaymentSourceRef:string;
    subscriptionActive:boolean;

    contractType: ContractType;
    state: ContractState;
    substate: ContractSubstate;
    depositRequired: boolean;

    customerRef: string;
    barcode: string;
    agentRef: string;
    agentDisplayName: string;
    managerRef: string;
    source:string;
    stripeCustomerRef:string;


    notes: string;

    hide?:boolean;

    constructor(id:string,createdDate:number,endsAt:number,agentId:string) {
        this.id = id;
        this.createdAt = createdDate;
        this.updatedAt = createdDate;
        this.rentalCost = 2688;
        this.contractType = ContractType.DAILY;
        this.state = ContractState.draft;
        this.substate = ContractSubstate.draft;
        this.agentRef = agentId;
        this.endsAt=endsAt;
        this.barcode='';
    }


}

export function isDAILYOrOVERNIGHTContract(contractType:string){
    return isDAILYContract(contractType) ||  isOVERNIGHTContract(contractType);
}

export function isDAILYContract(contractType:string){
    return contractType.toString().toLowerCase() == ContractType.DAILY.toString().toLowerCase();
}

export function isOVERNIGHTContract(contractType:string){
    return contractType.toString().toLowerCase() == ContractType.DAILY.toString().toLowerCase();
}

export function isWEEKLYContract(contractType:string){
    return contractType.toString().toLowerCase() == ContractType.DAILY.toString().toLowerCase();
}

export function isMONTHLYContract(contractType:string){
    return contractType.toString().toLowerCase() == ContractType.DAILY.toString().toLowerCase();
}

export enum ContractType {
    DAILY = "DAILY",
    OVERNIGHT = "OVERNIGHT",
    MULTIPLE_DAYS = "MULTIPLE_DAYS",
    WEEKLY = "WEEKLY",
    MONTHLY = "MONTHLY",
    QUICK_CONNECT = "QUICK_CONNECT"
}

export enum ContractState {
    draft=100,
    active=200,
    complete=300,
    breached=400
}

export enum ContractSubstate {
    draft = "Draft",
    signed = "Signed",
    paymentProcessed = "Payment Processed",
    active = "Active",
    complete = "Complete",
    breached = "Breached",
    archived = "Archived"
}
