import React, {useEffect, useMemo, useState} from 'react';
import {useStore} from "../context/ContextProvider";
import {UsersWithPostsType} from "../models/UsersWithPostsType";

const UsersPostsPage = () => {

    const {userStore:{allUsers}, postStore:{allPosts}}= useStore();
    const [userWithPostsState, setUserWithPostsState] = useState<UsersWithPostsType[]>([]);

    const userWithPostsArray = useMemo(()=> {
        return allUsers.map(user=>{
                return {...user, posts: allPosts.filter(post=>post.userId===user.id)}
            })
    },[allUsers, allPosts]);

    useEffect(() => {
        setUserWithPostsState(userWithPostsArray);
    }, [userWithPostsArray]);


    return (
        <div>
            {
                userWithPostsState.map(user =><div key={user.id}>

                    <h4>{user.name} post titles:</h4>
                    <ul>
                    {
                        user.posts.map(post=> (<li key={post.id}> {post.title}</li>))
                    }
                    </ul>

                </div>)
            }
        </div>
    );
};

export default UsersPostsPage;