

export interface AgentActivity{
    userEmail:string;
    type:string;
    createdAt:number;
}

export function AgentActivityCreate(userEmail:string,type:string,createdAt:number):AgentActivity