import {createBrowserRouter, RouteObject} from "react-router-dom";
import App from "../App";
import UserPage from "../pages/UserPage";
import UsersPage from "../pages/UsersPage";
import PostsPage from "../pages/PostsPage";
import PostPage from "../pages/PostPage";

const routes:RouteObject[]=[
    {
        path:"",
        element:<App/>,
        children:[
            {path:"users", element:<UsersPage/>},
            {path:"posts", element:<PostsPage/>},
            {path:"users/:userId", element:<UserPage/>},
            {path:"posts/:postId", element:<PostPage/>}
        ]
    }
]

export const router = createBrowserRouter(routes);


