
export interface AgentActivity{
    userEmail:string;
    type:AgentActivityType;
    createdAt:number;
}

export function AgentActivityCreate(userEmail:string,type:AgentActivityType,createdAt:number){
    var agentActivity = {} as AgentActivity;
    agentActivity.userEmail=userEmail;
    agentActivity.type=type;
    agentActivity.createdAt=createdAt;
    return agentActivity;
}

export enum AgentActivityType{
    login = "login",
    logout = "logout",
    assetCheckin = "assetCheckin",
    assetCheckout = "assetCheckout"
}
