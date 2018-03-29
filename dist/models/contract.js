
function isDAILYOrOVERNIGHTContract(contractType){
    return isDAILYContract(contractType) ||  isOVERNIGHTContract(contractType);
}

function isDAILYContract(contractType){
    return contractType.toString().toLowerCase() == ContractType.DAILY.toString().toLowerCase();
}

function isOVERNIGHTContract(contractType){
    return contractType.toString().toLowerCase() == ContractType.DAILY.toString().toLowerCase();
}

function isWEEKLYContract(contractType){
    return contractType.toString().toLowerCase() == ContractType.DAILY.toString().toLowerCase();
}

function isMONTHLYContract(contractType){
    return contractType.toString().toLowerCase() == ContractType.DAILY.toString().toLowerCase();
}

function createNewContract(id,createdDate,endsAt,agentId) {
    var contract = {};
    contract.id = id;
    contract.createdAt = createdDate;
    contract.updatedAt = createdDate;
    contract.rentalCost = 2688;
    contract.contractType = ContractType.DAILY;
    contract.state = ContractState.draft;
    contract.substate = ContractSubstate.draft;
    contract.agentRef = agentId;
    contract.endsAt=endsAt;
    contract.barcode='';
    return contract;
}