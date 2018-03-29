import { AssetActivity } from './assetActivity';
import { AssetState } from './assetState';
export class Asset{
    barcode:string;
    imei:string;
    sim:string;
    state:AssetState;
    updatedAt:number;
    createdAt:number;
    location:string;
    simActivationDate:number;
    simExpirationDate:number;
    leaseCounter:number;
    contractRef:string;
    notes:string;


}

export function createNewAsset(barcode:string):Asset