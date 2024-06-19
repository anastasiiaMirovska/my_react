import {createAsyncThunk, createSlice, isFulfilled, isRejected, PayloadAction} from "@reduxjs/toolkit";
import {IPostModel} from "../../models/IPostModel";
import {postService} from "../../services/api.service";
import {AxiosError} from "axios";

type PostSliceType = {
    posts: IPostModel[],
    post: IPostModel | null,
    isLoaded : boolean
}

const initialState:PostSliceType = {
    posts: [],
    post: null,
    isLoaded : false
}


const loadPosts = createAsyncThunk(
    "postSlice/loadPosts",
    async (_, thunkAPI) => {
        try{
            const posts =  await postService.getAllPosts();
            thunkAPI.dispatch(postActions.changeLoadState(true));
            return thunkAPI.fulfillWithValue(posts);
        }
        catch(e){
            const error =  e as AxiosError;
            return thunkAPI.rejectWithValue(error.response?.data)
        }
    }
);

const loadPostById = createAsyncThunk(
    "postSlice/loadPostById",
    async (postId: string|undefined, thunkAPI)=>{
        if(postId){
            try{
                const post = await  postService.getPostById(postId);
                return thunkAPI.fulfillWithValue(post);
            }
            catch (e){
                const error = e as AxiosError;
                return thunkAPI.rejectWithValue(error);
            }
        }
        return null;
    }
)


const postSlice = createSlice({
    name:"postSlice",
    initialState: initialState,
    reducers:{
        changeLoadState:(state, action:PayloadAction<boolean>)=>{
            state.isLoaded = action.payload;
        }
    },
    extraReducers: builder =>
        builder
            .addCase(loadPosts.fulfilled, (state, action)=>{
                state.posts = action.payload;
            } )
            .addCase(loadPostById.fulfilled, (state, action)=>{
                state.post = action.payload;
            })
            .addMatcher(isFulfilled(loadPosts, loadPostById), (state, action)=>{
                state.isLoaded =  true;
            })
            .addMatcher(isRejected(loadPosts, loadPostById), (state, action)=>{
                state.isLoaded = false
            })
});

export const {reducer: postReducer, actions} = postSlice;

export const postActions = {
    ...postSlice.actions,
    loadPosts,
    loadPostById
}

