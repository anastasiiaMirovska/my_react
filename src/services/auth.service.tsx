import {ITokenObtainPair} from "../interfaces/ITokenObtainPair";
import {IUserResponse} from "../interfaces/IUserResponse";
import {ResType} from "../types/resType";
import {axiosInstance} from "./api.service";
import {urls} from "../constants/urls";
import {IToken} from "../interfaces/IToken";


const _accessTokenKey = "access";
const _refreshTokenKey = "refresh";

const authService = {
    register(user:ITokenObtainPair):ResType<IUserResponse> {
        return axiosInstance.post(urls.auth.register, user)
    },

    async login(user:ITokenObtainPair):Promise<IUserResponse>{
        const {data} = await axiosInstance.post<IToken>(urls.auth.login, user);
        this.setTokens(data);
        const {data:me} = await this.me();
        return me
    },

    me():ResType<IUserResponse>{
        return axiosInstance.get(urls.auth.me);
    },
    setTokens({access, refresh}:IToken):void{
        localStorage.setItem(_accessTokenKey, access);
        localStorage.setItem(_refreshTokenKey, refresh);
    },

    getAccess():string{
        return localStorage.getItem(_accessTokenKey);
    },

    getRefresh():string {
        return localStorage.getItem(_refreshTokenKey);
    },

    deleteTokens():void{
        localStorage.removeItem(_accessTokenKey);
        localStorage.removeItem(_refreshTokenKey);
    }
}

export{
    authService
}