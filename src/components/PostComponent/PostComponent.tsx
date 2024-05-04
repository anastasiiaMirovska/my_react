import React, {FC} from 'react';
import {IPostModel} from "../../models/IPostModel";
import styles from "./Post.module.css"

interface IProps {
    post: IPostModel;
}

type ITypePropsComment = IProps & { children?: React.ReactNode };
const PostComponent: FC<ITypePropsComment> = ({post}) => {
    return (
        <div>
            <h3>PostID {post.id}:</h3>
            <h4>{post.title}</h4>
            <p>{post.body}</p>
            <p className={styles.tags}>
                {
                    post.tags.map((tag: string, index) => (<span key={index}>#{tag}</span>))
                }
            </p>
            <p>Reactions: {post.reactions}</p>
        </div>
    );
};

export default PostComponent;