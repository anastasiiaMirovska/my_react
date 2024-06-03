import React, {FC} from 'react';
import {IPostModel} from "../../models/IPostModel";
import styles from "../components.styles.module.css"

interface IProps{
    post: IPostModel
}

const PostComponent:FC<IProps> = ({post}) => {
    return (
        <div className={styles.block}>
            <div className={styles.box}>
                <h3>Post {post.id}</h3>
                <span>userId: {post.userId}</span><br/>
                <span>title: {post.title}</span><br/>
                <span>body: {post.body}</span><br/>
            </div>
        </div>
    );
};

export default PostComponent;