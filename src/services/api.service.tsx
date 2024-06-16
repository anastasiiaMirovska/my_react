import axios, {AxiosResponse} from "axios";
import {IUserModel} from "../models/IUserModel";
import {IPostModel} from "../models/IPostModel";

const axiosInstance = axios.create({
    baseURL:"https://jsonplaceholder.typicode.com",
    headers:{}
});

const usersService ={
    getUsers :async():Promise<AxiosResponse<IUserModel[]>> =>{
        return await axiosInstance.get<IUserModel[]>("/users");
    }
}

const postsService={
    getPosts:async():Promise<AxiosResponse<IPostModel[]>> =>{
        return await axiosInstance.get<IPostModel[]>("/posts");
    }
}

export{
    usersService,
    postsService
}
