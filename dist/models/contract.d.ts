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

}

export function createNewContract(id:string,createdDate:number,endsAt:number,agentId:string):Contract
export function isDAILYOrOVERNIGHTContract(contractType:string):boolean
export function isDAILYContract(contractType:string):boolean
export function isOVERNIGHTContract(contractType:string):boolean
export function isWEEKLYContract(contractType:string):boolean
export function isMONTHLYContract(contractType:string):boolean

export declare enum ContractType {
    DAILY = "DAILY",
    OVERNIGHT = "OVERNIGHT",
    MULTIPLE_DAYS = "MULTIPLE_DAYS",
    WEEKLY = "WEEKLY",
    MONTHLY = "MONTHLY",
    QUICK_CONNECT = "QUICK_CONNECT"
}

export declare enum ContractState {
    draft=100,
    active=200,
    complete=300,
    breached=400
}

export declare enum ContractSubstate {
    draft = "Draft",
    signed = "Signed",
    paymentProcessed = "Payment Processed",
    active = "Active",
    complete = "Complete",
    breached = "Breached",
    archived = "Archived"
}
