"use strict";
Object.defineProperty(exports, "__esModule",{
    value: true
});
var Enumeration = require("enum");


exports.BillState = new Enumeration({
    unpaid : "unpaid",
        paid : "paid"
});

exports.AssetActionDefinition = new Enumeration({
    checkin : 'checkin',
        checkout : 'checkout'
});

exports.AssetState = new Enumeration({
    inventory : 'Inventory',
        leased : 'Leased',
        missing : 'Missing',
        nonreturn : 'Nonreturn',
        damaged : 'Damaged'
});


exports.CustomerFaultReason = new Enumeration({
    waterDamage : 'Water Damage',
        physicalDamage : 'Physical Damage',
        unitTamperApparent : 'Unit tamper apparent',
        simCardRemoved : 'Sim Card Removed',
        screenBroken : 'Screen Broken',
        unitHardReset : 'Unit Hard Reset',
        other : 'Other'
});


exports.AgentActivityType = new Enumeration({
    login : "login",
        logout : "logout",
        assetCheckin : "assetCheckin",
        assetCheckout : "assetCheckout"
});


exports.ContractType = new Enumeration({
    DAILY : "DAILY",
        OVERNIGHT : "OVERNIGHT",
        MULTIPLE_DAYS : "MULTIPLE_DAYS",
        WEEKLY : "WEEKLY",
        MONTHLY : "MONTHLY",
        QUICK_CONNECT : "QUICK_CONNECT"
});

exports.ContractState = new Enumeration({
    draft : 100,
        active : 200,
        complete : 300,
        breached : 400
});

exports.ContractSubstate = new Enumeration({
    draft : "Draft",
        signed : "Signed",
        paymentProcessed : "Payment Processed",
        active : "Active",
        complete : "Complete",
        breached : "Breached",
        archived : "Archived"
});

exports.StoreLocationRegion = new Enumeration({
    FREEPORT : 'FREEPORT',
        NASSAU : 'NASSAU',
});

exports.StoreLocationConfigKeys = new Enumeration({
    PRICE_MODIFIER : 'PRICE_MODIFIER',
        CONTRACT_TYPES_ALLOWED : 'CONTRACT_TYPES_ALLOWED',
});


exports.PaymentMethod = new Enumeration({
    card : "card",
        cash : "cash"
});

exports.TransactionType = new Enumeration({
    charge : "charge",
        refund : "refund",
        deposit : 'deposit',
        depositReturn : 'depositReturn',
        breached : 'breached'
});

exports.TestEnum.test1 = 'asdf1';
exports.TestEnum.test2 = 'asdf2';