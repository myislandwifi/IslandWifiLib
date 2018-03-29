

export interface AssetActivity{
    barcode:string;
    activityTime:number;
    action:string;
    isAssetConditionSatisfactory:boolean;
    isCustomerAtFault:boolean;
    customerFaultReason:string;
    customerFaultOtherText:string;
    contractRef:string;
    agentRef:string;
    location:string;
}