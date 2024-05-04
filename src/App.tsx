import React, {useState} from 'react';
import './App.css';
import UsersComponent from "./components/UsersComponent/UsersComponent";
import PostsComponent from "./components/PostsComponent/PostsComponent";
import {IPostModel} from "./models/IPostModel";
import {getAllPostsOfSingleUser} from "./services/users.api.services";

const App = () => {

    const [posts, setPosts] = useState<IPostModel[]>([])
    const lift = (postId: number) => {
        getAllPostsOfSingleUser(postId).then(({data}) => setPosts(data.posts))
    }

    return (
        <div className="App">
            <div className="users_block">
                <UsersComponent lift={lift}></UsersComponent>
            </div>
            <div className="posts_block">
                <PostsComponent posts={posts}/>
            </div>

        </div>
    );
};

export default App;
