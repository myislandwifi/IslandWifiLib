

function AgentActivityCreate(userEmail,type,createdAt){
    var agentActivity = {};
    agentActivity.userEmail=userEmail;
    agentActivity.type=type;
    agentActivity.createdAt=createdAt;
    return agentActivity;
}
