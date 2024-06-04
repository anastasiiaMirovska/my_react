import React, {useEffect, useState} from 'react';
import CommentsComponent from "../components/CommentsComponent/CommentsComponent";
import {ICommentModel} from "../models/ICommentModel";
import {useParams} from "react-router-dom";
import {postsApiService} from "../services/posts.api.service";

const PostCommentsPage = () => {
    const {postId} = useParams();
    const [postComments, setPostComments] = useState<ICommentModel[]>([]);

    useEffect(()=>{
        if(postId){
            postsApiService.getPostComments(postId).then(resp=>setPostComments(resp.data));
            console.log(postComments);
        }
    },[postId, postComments]);


    return (
        <div>
            <CommentsComponent comments={postComments}/>
        </div>
    );
};

export default PostCommentsPage;