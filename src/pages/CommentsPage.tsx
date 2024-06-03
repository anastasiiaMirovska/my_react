import React, {useEffect, useState} from 'react';
import {ICommentModel} from "../models/ICommentModel";
import {commentsApiService} from "../services/comments.api.service";
import CommentsComponent from "../components/CommentsComponent/CommentsComponent";

const CommentsPage = () => {
    const [comments, setComments] = useState<ICommentModel[]>([]);
    useEffect(() => {
        commentsApiService.getAllComments().then(resp=>{
            if(resp){
                setComments([...resp.data]);
            }
        })
    }, []);
    return (
        <div>
            <CommentsComponent comments={comments}/>
        </div>
    );
};

export default CommentsPage;