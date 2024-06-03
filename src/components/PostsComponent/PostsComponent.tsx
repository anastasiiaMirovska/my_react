import React, {FC} from 'react';
import {IPostModel} from "../../models/IPostModel";
import PostComponent from "../PostComponent/PostComponent";
import styles from "../components.styles.module.css"

interface IProps{
    posts:IPostModel[]
}
const PostsComponent:FC<IProps> = ({posts}) => {
    return (
        <div className={styles.big_block}>
            {
                posts.map((post:IPostModel)=><PostComponent key={post.id} post={post}/>)
            }
        </div>
    );
};

export default PostsComponent;