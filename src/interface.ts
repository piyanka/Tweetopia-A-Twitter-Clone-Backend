export interface JWTUser{
    id: string;
    email: string;
}

export interface GrqphqlContext {
   user?: JWTUser; 
}