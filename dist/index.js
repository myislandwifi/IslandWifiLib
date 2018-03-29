

class Contract {
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
}