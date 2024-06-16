import {createContext, useContext} from "react";
import {IUserModel} from "../models/IUserModel";
import {IPostModel} from "../models/IPostModel";

type StoreType = {
    userStore: {
        allUsers:IUserModel[],
        setFavouriteUser:(obj:IUserModel)=>void
    },
    postStore: {
        allPosts: IPostModel[]
    }
}

const defaultValue ={
    userStore: {
        allUsers:[],
        setFavouriteUser:()=>{}
    },
    postStore: {
        allPosts: []
    }
}
export const Context = createContext<StoreType>(defaultValue);
export const useContextProvider = ():StoreType =>{
    return useContext(Context);
}
