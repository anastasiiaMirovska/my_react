import axios, {AxiosResponse} from "axios";
import {IUserModel} from "../models/IUserModel";
import {IPostModel} from "../models/IPostModel";

let axiosInstance = axios.create({
    baseURL:"https://jsonplaceholder.typicode.com",
    headers:{}
});

const usersApiService = {
    getAllUsers:():Promise<AxiosResponse<IUserModel[]>> =>{
        return axiosInstance.get("/users");
    },
    getUserPosts:(id:string):Promise<AxiosResponse<IPostModel[]>> =>{
        return axiosInstance.get(`/users/${id}/posts`);
    }
}

export{
    usersApiService
}
