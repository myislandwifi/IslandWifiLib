

export interface ContractEntitlement {
    active: boolean;
    contractType: string;
    priceModifier: number;
} 

export interface StoreLocation {
    id:string;
    region: string;
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
