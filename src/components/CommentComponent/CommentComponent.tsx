import React, {FC} from 'react';
import {ICommentModel} from "../../models/ICommentModel";
import styles from "../components.styles.module.css"

interface IProps{
    comment: ICommentModel
}
const CommentComponent:FC<IProps> = ({comment}) => {
    return (
        <div className={styles.block}>
            <div className={styles.box}>
                <h3>comment {comment.id}</h3>
                <span>postId: {comment.postId}</span><br/>
                <span>name: {comment.name}</span><br/>
                <span>email: {comment.email}</span><br/>
                <span>body: {comment.body}</span><br/>
            </div>
        </div>
    );
};

export default CommentComponent;