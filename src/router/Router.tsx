import {createBrowserRouter, RouteObject} from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import UsersPage from "../pages/UsersPage";
import PostsPage from "../pages/PostsPage";
import UsersPostsComponent from "../components/UsersPostsComponent/UsersPostsComponent";
import UsersPostsPage from "../pages/UsersPostsPage";

const routes:RouteObject[]=[
    {
        path:"/",
        element:<MainLayout/>,
        children:[
            {path:"users", element:<UsersPage/>},
            {path:"posts",element:<PostsPage/>},
            {path:"usersPosts", element:<UsersPostsPage/>}
        ]
    }
]

export const router = createBrowserRouter(routes);
