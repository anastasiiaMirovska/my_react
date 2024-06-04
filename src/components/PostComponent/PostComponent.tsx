import React, {FC} from 'react';
import {IPostModel} from "../../models/IPostModel";
import styles from "../components.styles.module.css"
import {NavLink, useNavigate} from "react-router-dom";

interface IProps{
    post: IPostModel
}

const PostComponent:FC<IProps> = ({post}) => {
    const navigate = useNavigate();
    const onClickNavigateHandler=()=>{
        navigate(post.id.toString());
    }

    return (
        <div className={styles.block}>
            <div className={styles.box}>
                <h3>Post {post.id}</h3>
                <span>userId: {post.userId}</span><br/>
                <span>title: {post.title}</span><br/>
                <span>body: {post.body}</span><br/>
                {/*<NavLink to={post.id.toString()}>Get comments</NavLink>*/}
                <button onClick={onClickNavigateHandler}>Get comments</button>
            </div>
        </div>
    );
};

export default PostComponent;