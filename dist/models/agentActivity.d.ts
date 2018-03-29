

export interface AgentActivity{
    userEmail:string;
    type:AgentActivityType;
    createdAt:number;
}

export function AgentActivityCreate(userEmail:string,type:AgentActivityType,createdAt:number):AgentActivity