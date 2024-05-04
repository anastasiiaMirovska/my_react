import React, {FC} from 'react';
import {IPostModel} from "../../models/IPostModel";
import PostComponent from "../PostComponent/PostComponent";
import styles from "./Posts.module.css"

interface IProps {
    posts: IPostModel[]
}

const PostsComponent: FC<IProps> = ({posts}) => {

    return (
        <div className={styles.posts_block}>
            <h2>User`s posts:</h2>
            {

                posts.map((post: IPostModel) => (
                        <PostComponent key={post.id} post={post}/>
                    )
                )
            }
        </div>
    );
};

export default PostsComponent;





