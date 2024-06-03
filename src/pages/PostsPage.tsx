import React, {useEffect, useState} from 'react';
import {IPostModel} from "../models/IPostModel";
import {postsApiService} from "../services/posts.api.service";
import PostsComponent from "../components/PostsComponent/PostsComponent";

const PostsPage = () => {

    const [posts, setPosts] = useState<IPostModel[]>([]);
    useEffect(()=>{
        postsApiService.getAllPosts().then(resp =>{
            if(resp){
                setPosts([...resp.data])
            }
        })
    },[])
    return (
        <div>
            <PostsComponent posts={posts}/>
        </div>
    );
};

export default PostsPage;