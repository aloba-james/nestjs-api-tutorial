import { Injectable } from "@nestjs/common";

@Injectable({})
export class AuthService {

    signup(){
        return {msg: "I have Signed Up"}
    }

    signin() {
        return {msg: "I have Signed In"}
    }
}
