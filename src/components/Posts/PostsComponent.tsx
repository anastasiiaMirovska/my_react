import React from 'react';
import {useAppSelector} from "../../redux/store";
import {IPostModel} from "../../models/IPostModel";
import PostComponent from "./PostComponent";

const PostsComponent = () => {
    const {posts, isLoaded} = useAppSelector(state => state.postSlice);
    return (
        <div>
            {
                isLoaded ? posts.map((post:IPostModel) => <PostComponent key={post.id} post={post}/>)
                    : <div>Loading.....</div>
            }
        </div>
    );
};

export default PostsComponent;