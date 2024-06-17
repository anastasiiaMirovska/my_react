import {configureStore, createSlice} from "@reduxjs/toolkit";
import {useDispatch, useSelector} from "react-redux";
import {counter1Slice} from "./slices/slice1";


export const store = configureStore({
    reducer:{
        slice1:counter1Slice.reducer
    }
});

export type MyRootState = ReturnType<typeof store.getState>;

export const useAppSelector = useSelector.withTypes<MyRootState>()

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = useDispatch.withTypes<AppDispatch>()
