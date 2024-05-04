import axios, {AxiosResponse} from "axios";
import {UsersResponseModel} from "./responseModels/UsersResponseModel";
import {PostsResponseModel} from "./responseModels/PostsResponseModel";

let axiosInstance = axios.create({
    baseURL: 'https://dummyjson.com',
    headers: {
        'content-Type': 'application/jason'
    }
});

const getAllUsers = (): Promise<AxiosResponse<UsersResponseModel>> => {
    return axiosInstance.get(`/users`);
}
const getAllPostsOfSingleUser = (id: number): Promise<AxiosResponse<PostsResponseModel>> => {
    return axiosInstance.get('/posts/user/' + id);
}
export {
    getAllUsers, getAllPostsOfSingleUser
}
