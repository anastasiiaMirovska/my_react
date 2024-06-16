import React, {FC} from 'react';
import {ICommentModel} from "../../models/ICommentModel";

interface IProps{
    comment: ICommentModel
}

const CommentComponent:FC<IProps> = ({comment}) => {
    return (
        <div>
            <h4>Comment {comment.id}</h4>
            <span>{comment.name} {comment.email}</span><br/>
            <span>{comment.body}</span><br/><br/>
        </div>
    );
};

export default CommentComponent;