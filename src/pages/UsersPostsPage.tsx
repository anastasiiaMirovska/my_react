import React, {useEffect, useMemo, useState} from 'react';
import UsersPostsComponent from "../components/UsersPostsComponent/UsersPostsComponent";
import {useContextProvider} from "../context/ContextProvider";
import {UsersWithPostsType} from "../models/UsersWithPostsType";

const UsersPostsPage = () => {

    const {userStore:{allUsers}, postStore:{allPosts}}= useContextProvider();
    const [userWithPostsState, setUserWithPostsState] = useState<UsersWithPostsType[]>([]);

    const userWithPostsArray = useMemo(()=> {
        return allUsers.map(user=>{
                return {...user, posts: allPosts.filter(post=>post.userId===user.id)}
            })
    },[allUsers, allPosts]);

    useEffect(() => {
        setUserWithPostsState(userWithPostsArray);
    }, []);


    return (
        <div>
            {
                userWithPostsState.map(user =><div key={user.id}>

                    <h4>{user.name} post titles:</h4>
                    <ul>
                    {
                        user.posts.map(post=> (<li>{post.title}</li>))
                    }
                    </ul>

                </div>)
            }
        </div>
    );
};

export default UsersPostsPage;