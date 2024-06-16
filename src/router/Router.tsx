import {createBrowserRouter, RouteObject} from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import UsersPage from "../pages/UsersPage";
import PostsPage from "../pages/PostsPage";
import UsersPostsPage from "../pages/UsersPostsPage";
import CommentsPage from "../pages/CommentsPage";
import PostsCommentsPage from "../pages/PostsCommentsPage";

const routes:RouteObject[]=[
    {
        path:"/",
        element:<MainLayout/>,
        children:[
            {path:"users", element:<UsersPage/>},
            {path:"posts",element:<PostsPage/>},
            {path:"usersPosts", element:<UsersPostsPage/>},
            {path:"comments", element:<CommentsPage/>},
            {path:"postsComments", element:<PostsCommentsPage/>}
        ]
    }
]

export const router = createBrowserRouter(routes);
