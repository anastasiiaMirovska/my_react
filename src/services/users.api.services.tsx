import axios, {AxiosResponse} from "axios";
import {IUserModel} from "../models/IUserModel";
import {UsersResponseModel} from "./responseModels/UsersResponseModel";
import {IPostModel} from "../models/IPostModel";
import {PostsResponseModel} from "./responseModels/PostsResponseModel";

let axiosInstance = axios.create({
    baseURL: 'https://dummyjson.com',
    headers:{
        'content-Type':'application/jason'
    }
});

const getAllUsers = (): Promise<AxiosResponse<UsersResponseModel>> =>{
    return axiosInstance.get(`/users`);
}
const getAllPostsOfSingleUser = (id:number):Promise<AxiosResponse<PostsResponseModel>> =>{
    return axiosInstance.get('/posts/user/'+id);
}
export{
    getAllUsers, getAllPostsOfSingleUser
}
