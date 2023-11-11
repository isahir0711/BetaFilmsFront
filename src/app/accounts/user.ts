export interface UserCreds{
    email:string,
    password:string
}

export interface AuthenticationResponse{
    token:string,
    expiration:Date,
    role:string
}

export interface RecoverPassDTO{
    otp:string
}

export interface ChangePasswordDTO{
    newPassword:string,
    emailToChange:string,
    recoverToken:string
}