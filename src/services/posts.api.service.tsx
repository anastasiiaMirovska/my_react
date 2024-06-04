import axios, {AxiosResponse} from "axios";
import {IPostModel} from "../models/IPostModel";
import {ICommentModel} from "../models/ICommentModel";

let axiosInstance = axios.create({
    baseURL:"https://jsonplaceholder.typicode.com",
    headers:{}
});

const postsApiService = {
    getAllPosts: ():Promise<AxiosResponse<IPostModel[]>> =>{
        return axiosInstance.get("/posts");
    },
    getPostComments:(postId:string):Promise<AxiosResponse<ICommentModel[]>> =>{
        return axiosInstance.get(`/posts/${postId}/comments`);
    }
}

export{
    postsApiService
}