import {createBrowserRouter} from "react-router-dom";
import MainLayout from "../layouts/MainLayout/MainLayout";
import ErrorLayout from "../layouts/error/ErrorLayout";
import HomePage from "../pages/HomePage";
import UsersPage from "../pages/UsersPage";
import PostsPage from "../pages/PostsPage";
import CommentsPage from "../pages/CommentsPage";
import React from "react";

export const routerConfig = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout/>,
        errorElement:<ErrorLayout/>,
        children: [
            {index:true, element:<HomePage/>},
            {path:"users", element:<UsersPage/>},
            {path:"posts", element:<PostsPage/>},
            {path:"comments", element:<CommentsPage/>}
        ]
    },
])
