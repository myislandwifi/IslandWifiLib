"use strict";
Object.defineProperty(exports, "__esModule",{
    value: true
});

exports.AgentActivityCreate = function(userEmail,type,createdAt){
    var agentActivity = {};
    agentActivity.userEmail=userEmail;
    agentActivity.type=type;
    agentActivity.createdAt=createdAt;
    return agentActivity;
}
