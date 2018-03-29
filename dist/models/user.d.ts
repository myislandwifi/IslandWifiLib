
export interface Roles {
    reader: boolean;
    agent?: boolean;
    manager?:  boolean;
    admin?:  boolean;

  }
  
export interface User{
    id: string;
    email: string;
    roles: Roles;

    firstName?: string;
    lastName?: string;
    phone?: string;
    photoURL?: string;  
    
}
