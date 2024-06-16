import React, {FC} from 'react';
import {UsersWithPostsType} from "../../models/UsersWithPostsType";
interface IProps{
    items:UsersWithPostsType[]
}
const UsersPostsComponent:FC<IProps> = ({items}) => {
    return (
        <div>
            {
                items.map(item=><div key={item.id}>
                    {item.name} {item.username}
                    <ul>
                        {
                            item.posts.map((post)=>(<li key={post.id}>{post.title}</li>))
                        }
                    </ul>
                </div>)
            }
        </div>
    );
};

export default UsersPostsComponent;