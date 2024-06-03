import React, {FC} from 'react';
import {IUserModel} from "../../models/IUserModel";
import styles from "../components.styles.module.css"

interface IProps{
    user: IUserModel
}

const UserComponent:FC<IProps> = ({user}) => {
    return (
        <div className={styles.block}>
            <div className={styles.box}>
                <h3>User {user.id}</h3>
                <span>name: {user.name}</span><br/>
                <span>username: {user.username}</span><br/>
                <span>email: {user.email}</span><br/>
                <span>phone: {user.phone}</span><br/>
            </div>
        </div>
    );
};

export default UserComponent;