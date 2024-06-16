import React, {useEffect, useState} from 'react';
import HeaderComponent from "../components/HeaderComponent/HeaderComponent";
import {Outlet} from "react-router-dom";
import {IUserModel} from "../models/IUserModel";
import {IPostModel} from "../models/IPostModel";
import {commentsService, postsService, usersService} from "../services/api.service";
import {Context} from "../context/ContextProvider";
import {ICommentModel} from "../models/ICommentModel";

const MainLayout = () => {

    const [users, setUsers] = useState<IUserModel[]>([]);
    const [posts, setPosts] = useState<IPostModel[]>([]);
    const [comments, setComments] = useState<ICommentModel[]>([]);

    const [favouriteUserState, setFavouriteUserState] = useState<IUserModel | null>(null);

    useEffect(()=>{
        usersService.getUsers().then(value => setUsers(value.data));
        postsService.getPosts().then(value=> setPosts(value.data));
        commentsService.getComments().then(value=>setComments(value.data));
    }, [])

    const setFavouriteUser =(obj:IUserModel)=>{
        setFavouriteUserState(obj);
    }

    return (
        <div>
            <HeaderComponent/>
            <Context.Provider value={{
                userStore: {
                    allUsers: users,
                    setFavouriteUser:(obj:IUserModel)=> setFavouriteUser(obj)
                },
                postStore:{
                    allPosts: posts
                },
                commentStore:{
                    allComments: comments
                }
            }}>
                <Outlet/>
            </Context.Provider>
            <hr/>
                {favouriteUserState && <div>Favorite user is {favouriteUserState.name} - {favouriteUserState.email}</div>}
            <hr/>

        </div>
    );
};

export default MainLayout;