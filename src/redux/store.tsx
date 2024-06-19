import {configureStore} from "@reduxjs/toolkit";
import {userReducer, userSlice} from "./slices/UserSlice";
import {useDispatch, useSelector} from "react-redux";
import {postReducer} from "./slices/PostSlice";


export const store = configureStore({
    reducer:{
        userSlice: userReducer,
        postSlice: postReducer
    }
})

export const useAppDispatch = useDispatch.withTypes<typeof store.dispatch>();
export const useAppSelector = useSelector.withTypes<ReturnType<typeof store.getState>>();

