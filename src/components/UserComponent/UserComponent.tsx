import React, {FC} from 'react';
import {IUserModel} from "../../models/IUserModel";
import styles from "../components.styles.module.css"
import {useNavigate} from "react-router-dom";

interface IProps{
    user: IUserModel
}

const UserComponent:FC<IProps> = ({user}) => {
    const navigate = useNavigate();
    const onClickNavigateHandler = ()=>{
        navigate(user.id.toString());
    }

    return (
        <div className={styles.block}>
            <div className={styles.box}>
                <h3>User {user.id}</h3>
                <span>name: {user.name}</span><br/>
                <span>username: {user.username}</span><br/>
                <span>email: {user.email}</span><br/>
                <span>phone: {user.phone}</span><br/>
                <button onClick={onClickNavigateHandler}>Get posts</button>
            </div>
        </div>
    );
};

export default UserComponent;