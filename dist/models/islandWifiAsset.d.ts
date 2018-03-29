

export class Asset{
    barcode:string;
    imei:string;
    sim:string;
    state:string;
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