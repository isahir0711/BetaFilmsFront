export interface UserCreds{
    email:string,
    password:string
}

export interface AuthenticationResponse{
    token:string,
    expiration:Date,
    role:string
}