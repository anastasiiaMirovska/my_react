import React from 'react';
import {useAppSelector} from "../../redux/store";
import {IUserModel} from "../../models/IUserModel";
import UserComponent from "./UserComponent";

const UsersComponent = () => {
    const {users,isLoaded}= useAppSelector(state=>state.userSlice);
    return (
        <div>
            {
                isLoaded ? users.map((user:IUserModel)=> <UserComponent  key={user.id} user={user}/>)
                    :
                    <h3>Loading...</h3>
            }
        </div>
    );
};

export default UsersComponent;