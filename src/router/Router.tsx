import {createBrowserRouter} from "react-router-dom";
import MainLayout from "../layouts/MainLayout/MainLayout";
import ErrorLayout from "../layouts/error/ErrorLayout";
import HomePage from "../pages/HomePage";
import UsersPage from "../pages/UsersPage";
import PostsPage from "../pages/PostsPage";
import CommentsPage from "../pages/CommentsPage";
import React from "react";
import UserPostsPage from "../pages/UserPostsPage";
import PostCommentsPage from "../pages/PostCommentsPage";

export const routerConfig = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout/>,
        errorElement:<ErrorLayout/>,
        children: [
            {index:true, element:<HomePage/>},
            {path:"users", element:<UsersPage/>},
            {path:"users/:userId", element:<UserPostsPage/>},
            {path:"users/:userId/:postId", element:<PostCommentsPage/>},
            {path:"posts", element:<PostsPage/>},
            {path:"posts/:postId", element:<PostCommentsPage/>},
            {path:"comments", element:<CommentsPage/>}
        ]
    },
])
