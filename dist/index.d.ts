
export * from './models/agentActivity';
export * from './models/assetActivity';
export * from './models/assetState';
export * from './models/bill';
export * from './models/cardinfo';
export * from './models/constants';
export * from './models/contract';
export * from './models/customer';
export * from './models/islandWifiAsset';
export * from './models/queryConfig';
export * from './models/refund';
export * from './models/StoreLocation'; 
export * from './models/stripePaymentSource';
export * from './models/stripeSubscription';
export * from './models/transaction';
export * from './models/user';

/*export declare class Contract {
    id: string;
    signatureData: string;

    displayName: string;
    location: string;
    firstName: string;
    lastName: string;
    email: string;
    createdAt: number;
    updatedAt: number;
    endsAt: number;

    rentalCost: number;
    liabilityAmount: number;
    paymentMethod: PaymentMethod;
    stripePaymentSource: string;
    stripePaymentSourceRef: string;
    subscriptionActive: boolean;

    contractType: ContractType;
    state: ContractState;
    substate: ContractSubstate;
    depositRequired: boolean;

    customerRef: string;
    barcode: string;
    agentRef: string;
    agentDisplayName: string;
    managerRef: string;
    source: string;
    stripeCustomerRef: string;


    notes: string;

    hide?: boolean;
}

export declare enum ContractType {
    DAILY = "DAILY",
    OVERNIGHT = "OVERNIGHT",
    MULTIPLE_DAYS = "MULTIPLE_DAYS",
    WEEKLY = "WEEKLY",
    MONTHLY = "MONTHLY",
    QUICK_CONNECT = "QUICK_CONNECT"
}

export declare enum ContractState {
    draft = 100,
    active = 200,
    complete = 300,
    breached = 400
}

export declare enum ContractSubstate {
    draft = "Draft",
    signed = "Signed",
    paymentProcessed = "Payment Processed",
    active = "Active",
    complete = "Complete",
    breached = "Breached",
    archived = "Archived"
}*/