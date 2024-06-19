import axios from "axios";
import {baseUrl, urls} from "../constants/urls";
import {IUserModel} from "../models/IUserModel";
import {IPostModel} from "../models/IPostModel";


const axiosInstance = axios.create({
    baseURL: baseUrl,
    headers:{}
})

const userService={
    getAllUsers: async():Promise<IUserModel[]> =>{
        const response = await axiosInstance.get<IUserModel[]>(urls.users.base);
        return response.data;
    },
    getUserById: async(id: string): Promise<IUserModel>=>{
       const response = await axiosInstance.get<IUserModel>(urls.users.byId(+id));
       return response.data;
    }
}

const postService={
    getAllPosts: async():Promise<IPostModel[]> =>{
        const response = await axiosInstance.get<IPostModel[]>(urls.posts.base);
        return response.data;
    },
    getPostById: async(id: string): Promise<IPostModel>=>{
        const response = await axiosInstance.get<IPostModel>(urls.posts.byId(+id));
        return response.data;
    }
}

export{
    userService,
    postService
}
