import React, {FC} from 'react';
import {ICommentModel} from "../../models/ICommentModel";
import CommentComponent from "../CommentComponent/CommentComponent";
import styles from "../components.styles.module.css"

interface IProps{
    comments:ICommentModel[]
}
const CommentsComponent:FC<IProps> = ({comments}) => {
    return (
        <div className={styles.big_block}>
            {
                comments.map((comment:ICommentModel)=><CommentComponent key={comment.id} comment={comment}/>)
            }
        </div>
    );
};

export default CommentsComponent;