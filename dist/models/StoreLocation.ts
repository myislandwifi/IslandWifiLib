import { ContractType } from './contract';

export interface StoreLocation {
    id:string;
    region: StoreLocationRegion;
    name: string;
    latitude: number;
    longitude: number;
    changed: boolean;
    entitlements: ContractEntitlement[];
    /*freeportHarbor='freeportHarbor',
    freeportBahamasAdventures='freeportBahamasAdventures',
    freeportGetMeRide='freeportGetMeRide',
    freeportZorbas='freeportZorbas',*/

}

export interface ContractEntitlement {
    active: boolean;
    contractType: ContractType;
    priceModifier: number;
}

export enum StoreLocationConfigKeys {
    PRICE_MODIFIER = 'PRICE_MODIFIER',
    CONTRACT_TYPES_ALLOWED = 'CONTRACT_TYPES_ALLOWED',
}


export enum StoreLocationRegion {
    FREEPORT = 'FREEPORT',
    NASSAU = 'NASSAU',
}