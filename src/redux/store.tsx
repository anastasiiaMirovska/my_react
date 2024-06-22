import {configureStore} from "@reduxjs/toolkit";
import {authReducer} from "./slices/authSlice";


const store = configureStore({
    reducer:{
        authSlice: authReducer
    }
})

type AppDispatchType = typeof store.dispatch;
type RootState = ReturnType<typeof store.getState>;

export{
    store
}

export type{
    AppDispatchType,
    RootState
}
