import React, {useEffect, useMemo, useState} from 'react';
import {useContextProvider} from "../context/ContextProvider";
import {PostsWithCommentsType} from "../models/PostsWithCommentsType";

const PostsCommentsPage = () => {
    const {commentStore:{allComments}, postStore: {allPosts}}=useContextProvider();
    const [postWithCommentsState, setPostWithCommentsState] = useState<PostsWithCommentsType[]>([]);

    const postWithCommentsArray = useMemo(()=>{
        return allPosts.map(post=>{
            return {...post, comments: allComments.filter(comment=> comment.postId = post.id)}
        })
    }, [allComments, allPosts]);

    useEffect(() => {
        setPostWithCommentsState(postWithCommentsArray);
    }, [postWithCommentsArray]);

    return (
        <div>
            {
                postWithCommentsState.map(post=><div key={post.id}>
                    <h4>Post {post.id} has such comments:</h4>
                    <ul>
                        {
                            post.comments.map(comment=> <li key={comment.id}>{comment.body} FROM {comment.name}</li>)
                        }
                    </ul>
                </div>)
            }
        </div>
    );
};

export default PostsCommentsPage;