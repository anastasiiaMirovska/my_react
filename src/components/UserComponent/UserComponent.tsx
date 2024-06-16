import React, {FC} from 'react';
import {IUserModel} from "../../models/IUserModel";
import {useContextProvider} from "../../context/ContextProvider";

interface IProps{
    user:IUserModel
}

const UserComponent:FC<IProps> = ({user}) => {
    const { userStore: { setFavouriteUser}}= useContextProvider()
    return (
        <div>
            <h4>User {user.id}:</h4>
            <span>{user.name}</span><br/>
            <span>{user.username}</span><br/>
            <span>{user.email}</span><br/>
            <button onClick={()=>{setFavouriteUser(user)}}>Choose favorite</button>
        </div>
    );
};

export default UserComponent;