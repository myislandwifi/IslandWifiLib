

export declare class Contract{
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
    paymentMethod:string;
    stripePaymentSource: string;
    stripePaymentSourceRef:string;
    subscriptionActive:boolean;

    contractType: string;
    state: string;
    substate: string;
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
