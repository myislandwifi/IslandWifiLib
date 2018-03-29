var Enumeration = require('enum');

export var ContractType:Enumeration;


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
