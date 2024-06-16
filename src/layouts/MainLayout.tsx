import React, {useEffect, useState} from 'react';
import HeaderComponent from "../components/HeaderComponent/HeaderComponent";
import {Outlet} from "react-router-dom";
import {IUserModel} from "../models/IUserModel";
import {IPostModel} from "../models/IPostModel";
import {commentsService, postsService, usersService} from "../services/api.service";
import {ICommentModel} from "../models/ICommentModel";
import {useStore} from "../context/ContextProvider";

const MainLayout = () => {

    const {commentStore: {setAllComments}, postStore: { setAllPosts}, userStore: { setAllUsers,favoriteUser, setFavoriteUser}}= useStore()

    useEffect(()=>{
        usersService.getUsers().then(value => setAllUsers(value.data));
        postsService.getPosts().then(value=> setAllPosts(value.data));
        commentsService.getComments().then(value=>setAllComments(value.data));
    }, [])

    const setFavouriteUser =(obj:IUserModel)=>{
        setFavoriteUser(obj);
    }

    return (
        <div>
            <HeaderComponent/>
            <Outlet/>

            <hr/>
                {favoriteUser&& <div>Favorite user is {favoriteUser.name} - {favoriteUser.email}</div>}
            <hr/>

        </div>
    );
};

export default MainLayout;