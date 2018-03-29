import { ContractType } from 'island-wifi-lib';
e
export interface ContractEntitlement {
    active: boolean;
    contractType: ContractType;
    priceModifier: number;
} 

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
