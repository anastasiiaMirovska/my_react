import React, {FC} from 'react';
import {IPostModel} from "../../models/IPostModel";
import {useNavigate} from "react-router-dom";
import {useAppDispatch} from "../../redux/store";
import {postActions} from "../../redux/slices/PostSlice";

interface IProps{
    post: IPostModel
}

const PostComponent:FC<IProps> = ({post}) => {
    const {body, id, title, userId} = post;
    const navigate = useNavigate();
    return (
        <div>
            <h3>Post {id}:</h3>
            <span>title: {title}</span><br/>
            <button onClick={()=>{
                navigate(id.toString())
            }}>More details </button>
        </div>
    );
};

export default PostComponent;