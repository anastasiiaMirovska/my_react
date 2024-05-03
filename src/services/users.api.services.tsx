import axios, {AxiosResponse} from "axios";
import {IUserModel} from "../models/UserModel";
import {UsersResponseModel} from "./responseModels/UsersResponseModel";

let axiosInstance = axios.create({
    baseURL: 'https://dummyjson.com/users',
    headers:{
        'content-Type':'application/jason'
    }
});

const getAllUsers = (): Promise<AxiosResponse<UsersResponseModel>> =>{
    return axiosInstance.get(``);
}

export{
    getAllUsers
}
