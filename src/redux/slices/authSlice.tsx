import {createAsyncThunk, createSlice, isFulfilled, isRejected} from "@reduxjs/toolkit";
import {IUserResponse} from "../../interfaces/IUserResponse";
import {ITokenObtainPair} from "../../interfaces/ITokenObtainPair";
import {authService} from "../../services/auth.service";

type AuthSliceType = {
    me: IUserResponse,
    error: boolean
}

const authInitialState: AuthSliceType ={
    me: null,
    error: null
};

const login = createAsyncThunk<IUserResponse, {user:ITokenObtainPair}>(
    "authSlice/login",
    async ({user}, {rejectWithValue})=>{
            try{
                return await authService.login(user);
            }
            catch(e){
                return rejectWithValue(e)
            }
    }
)


const authSlice = createSlice({
    name:"authSlice",
    initialState:authInitialState,
    reducers:{},
    extraReducers: builder =>
        builder
            .addCase(login.fulfilled, (state, action)=>{
                state.me = action.payload
            })
            .addMatcher(isRejected(login), (state, action)=>{
                state.error =  true
            })
            .addMatcher(isFulfilled(login), (state, action)=>{
                state.error = false
            })
})

const {reducer: authReducer,actions} = authSlice;

const AuthActions ={
    ...actions,
    login
}

export{
    authReducer,
    AuthActions
}
