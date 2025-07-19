export class ResitrationReqDto{
    id : string;
    password : string;
}
export class ResitrationResDto{

}
export class LoginReqDto{
    id : string;
    password : string;
}

export class LoginResDto{
    sessionId : string;
    seq : number;
    id : string;
}