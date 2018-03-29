import { AssetActionDefinition } from "./assetState";


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