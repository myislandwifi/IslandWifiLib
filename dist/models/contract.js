"use strict";
Object.defineProperty(exports, "__esModule",{
    value: true
}); 
var Contract = require("./contract");
var Constants = require("./constants");

exports.createNewContract = function (id,createdDate,endsAt,agentId) {
    var contract = {};
    contract.id = id;
    contract.createdAt = createdDate;
    contract.updatedAt = createdDate;
    contract.rentalCost = 2688;
    contract.contractType = 'DAILY';
    contract.state = 100;
    contract.substate = "Draft";
    contract.agentRef = agentId;
    contract.endsAt=endsAt;
    contract.barcode='';
    return contract;
};


exports.isDAILYContract = function(contractType){
    return contractType.toString().toLowerCase() == Constants.ContractType.DAILY.toString().toLowerCase();
};

exports.isOVERNIGHTContract = function(contractType){
    return contractType.toString().toLowerCase() == Constants.ContractType.DAILY.toString().toLowerCase();
};

exports.isWEEKLYContract = function(contractType){
    return contractType.toString().toLowerCase() == Constants.ContractType.DAILY.toString().toLowerCase();
};

exports.isMONTHLYContract = function(contractType){
    return contractType.toString().toLowerCase() == Constants.ContractType.DAILY.toString().toLowerCase();
};

exports.isDAILYOrOVERNIGHTContract = function(contractType){
    return exports.isDAILYContract(contractType) ||  exports.isOVERNIGHTContract(contractType);
};