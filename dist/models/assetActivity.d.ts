import { AssetActionDefinition } from "./assetState";

export declare enum CustomerFaultReason{
    waterDamage = 'Water Damage',
    physicalDamage = 'Physical Damage',
    unitTamperApparent = 'Unit tamper apparent',
    simCardRemoved = 'Sim Card Removed',
    screenBroken = 'Screen Broken',
    unitHardReset = 'Unit Hard Reset',
    other = 'Other'
}

export interface AssetActivity{
    barcode:string;
    activityTime:number;
    action:AssetActionDefinition;
    isAssetConditionSatisfactory:boolean;
    isCustomerAtFault:boolean;
    customerFaultReason:CustomerFaultReason;
    customerFaultOtherText:string;
    contractRef:string;
    agentRef:string;
    location:string;
}