import {IUserModel} from "./IUserModel";
import {IPostModel} from "./IPostModel";

export type UsersWithPostsType = IUserModel & {posts: IPostModel[]};