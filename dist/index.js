
export * from './models/agentActivity';
export * from './models/assetActivity';
export * from './models/assetState';
export * from './models/bill';
export * from './models/cardinfo';
export * from './models/contract';
export * from './models/customer';
export * from './models/islandWifiAsset';
export * from './models/queryConfig';
export * from './models/refund';
export * from './models/settings';
export * from './models/StoreLocation';
export * from './models/stripeCharge';
export * from './models/stripePaymentSource';
export * from './models/stripeSubscription';
export * from './models/transaction';
export * from './models/user';

/*class Contract {
    constructor(id,createdDate,endsAt,agentId) {
        this.id = id;
        this.createdAt = createdDate;
        this.updatedAt = createdDate;
        this.rentalCost = 2688;
        this.contractType = ContractType.DAILY;
        this.state = ContractState.draft;
        this.substate = ContractSubstate.draft;
        this.agentRef = agentId;
        this.endsAt=endsAt;
        this.barcode='';
    }
}*/