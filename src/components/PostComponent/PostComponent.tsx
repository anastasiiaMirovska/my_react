import React, {FC} from 'react';
import {IPostModel} from "../../models/IPostModel";

interface IProps{
    post: IPostModel
}
const PostComponent:FC<IProps> = ({post}) => {
    return (
        <div>
            <span>Post {post.id} </span><br/>
            <span>{post.title}</span>
            <span>{post.body}</span><br/><br/>
        </div>
    );
};

export default PostComponent;