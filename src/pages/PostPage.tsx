import React, {useEffect} from 'react';
import {useParams} from "react-router-dom";
import {useAppDispatch, useAppSelector} from "../redux/store";
import {postActions} from "../redux/slices/PostSlice";

const PostPage = () => {
    const {postId} = useParams();
    const {post} = useAppSelector(state => state.postSlice);

    const dispatch = useAppDispatch();
    useEffect(()=>{
        dispatch(postActions.loadPostById(postId));
    }, [postId]);

    return (
        <div>
            <h3>Post details:</h3>
            {
               post ? <p> Body : {post.body}</p> : <p>There is no info</p>
            }
        </div>
    );
};

export default PostPage;