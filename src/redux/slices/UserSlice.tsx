import {IUserModel} from "../../models/IUserModel";
import {createAsyncThunk, createSlice, isFulfilled, isRejected, PayloadAction} from "@reduxjs/toolkit";
import {userService} from "../../services/api.service";
import {Simulate} from "react-dom/test-utils";
import load = Simulate.load;
import {AxiosError} from "axios";


type UserSliceType = {
    users: IUserModel[],
    user: IUserModel | null,
    isLoaded: boolean
}

const userInitState: UserSliceType = {
    users: [],
    user: null,
    isLoaded: false
}

const loadUsers = createAsyncThunk(
    "userSlice/loadUsers",
    async (_, thunkAPI) => {

        try {
            const users = await userService.getAllUsers();
            thunkAPI.dispatch(userActions.changeLoadState(true));
            return thunkAPI.fulfillWithValue(users);
        } catch (e) {
            const error = e as AxiosError;
            return thunkAPI.rejectWithValue(error.response?.data);
        }
    }
);

const loadUserById = createAsyncThunk(
"userSlice/loadUserById",
    async(id:string|undefined, thunkAPI)=>{
    if(id){
        try{
            const user =  await userService.getUserById(id);
            return thunkAPI.fulfillWithValue(user)
        }
        catch(e){
            const error = e as AxiosError;
            return thunkAPI.rejectWithValue(error.response?.data);
        }
        }
    return null;
    }
)


export const userSlice = createSlice({
    name: "userSlice",
    initialState: userInitState,
    reducers: {
        changeLoadState:(state, action:PayloadAction<boolean>)=>{
            state.isLoaded = action.payload;
        }

    },
    extraReducers: builder =>
        builder
            .addCase(loadUsers.fulfilled, (state, action) => {
                state.users = action.payload;
            })
            .addCase(loadUsers.rejected, (state, action) => {
                console.log(action.payload);
            })
            .addCase(loadUserById.fulfilled, (state, action)=>{
                state.user =  action.payload
            })
            .addCase(loadUserById.rejected, (state, action)=>{
                console.log(action.payload)
            })
            .addMatcher(isFulfilled(loadUsers, loadUserById), (state,action)=>{
                state.isLoaded = true;
            })
            .addMatcher(isRejected(loadUsers, loadUserById), (state,action)=>{
                state.isLoaded = false;
            })
});

export const {reducer: userReducer, actions } =  userSlice;

export const userActions = {
    ...userSlice.actions,
    loadUsers,
    loadUserById
}

