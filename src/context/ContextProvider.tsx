import {IUserModel} from "../models/IUserModel";
import {IPostModel} from "../models/IPostModel";
import {ICommentModel} from "../models/ICommentModel";
import {create} from "zustand";

type StoreType = {
    userStore: {
        allUsers:IUserModel[],
        setAllUsers:(usersArray:IUserModel[])=>void,

        favoriteUser: IUserModel | null,
        setFavoriteUser:(user:IUserModel)=>void
    },
    postStore: {
        allPosts: IPostModel[],
        setAllPosts: (postsArray:IPostModel[])=>void
    },
    commentStore:{
        allComments:ICommentModel[],
        setAllComments: (commentsArray: ICommentModel[])=>void
    }
}

export const useStore = create<StoreType>()((set)=>{
    return{
        userStore:{
            allUsers: [],
            setAllUsers:(usersArray:IUserModel[])=>{
                return set((state:StoreType)=>{
                    return {
                        ...state,
                        userStore:{
                            ...state.userStore,
                            allUsers:usersArray
                        }
                    }
                })
            },
            favoriteUser: null,
            setFavoriteUser: (user:IUserModel)=>{
                return set((state:StoreType)=>{
                    return {
                        ...state,
                        userStore:{
                            ...state.userStore,
                            favoriteUser: user
                        }
                    }
                })
            }
        },
        postStore:{
            allPosts: [],
            setAllPosts:(postsArray:IPostModel[])=>{
                return set((state:StoreType)=>{
                    return{
                        ...state,
                        postStore:{
                            ...state.postStore,
                            allPosts: postsArray
                        }
                    }
                })
            }
        },
        commentStore:{
            allComments:[],
            setAllComments:(commentsArray: ICommentModel[])=>{
                return set((state:StoreType)=>{
                    return{
                        ...state,
                        commentStore:{
                            ...state.commentStore,
                            allComments:commentsArray
                        }
                    }
                })
            }
        }
    }
})