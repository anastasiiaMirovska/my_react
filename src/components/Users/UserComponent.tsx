import React, {FC} from 'react';
import {IUserModel} from "../../models/IUserModel";
import {useNavigate} from "react-router-dom";

interface IProps{
    user: IUserModel
}

const UserComponent:FC<IProps> = ({user}) => {
    const navigate = useNavigate();

    return (
        <div>
            <span><b>User {user.id} :</b></span><br/>
            <span>{user.name} - {user.username} - {user.email}</span><br/>
            <button onClick={() => {
                navigate(user.id.toString())
            }}>
                Choose user
            </button>
            <br/>
            <br/>
        </div>
    );
};

export default UserComponent;
