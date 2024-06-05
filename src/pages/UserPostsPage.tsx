import React, {useEffect, useState} from 'react';
import PostsComponent from "../components/PostsComponent/PostsComponent";
import {usersApiService} from "../services/users.api.service";
import {useParams} from "react-router-dom";
import {IPostModel} from "../models/IPostModel";

const UserPostsPage = () => {
    const {userId} = useParams();
    const [userPosts, setUserPosts] = useState<IPostModel[]>([]);

    useEffect(()=>{
        if(userId){
            usersApiService.getUserPosts(userId).then(resp=>setUserPosts(resp.data));
        }
    },[userId]);

    return (
        <div>
            <PostsComponent posts={userPosts}/>
        </div>
    );
};

export default UserPostsPage;