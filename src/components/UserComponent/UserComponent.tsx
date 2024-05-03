import React, {FC} from 'react';
import {IUserModel} from "../../models/IUserModel";
import styles from "./User.module.css"
import {goThrough} from "../../services/goThroughObject"


export interface IUserProp{
    user: IUserModel
}

export type ITypeUserComponent = IUserProp & { children?: React.ReactNode } & {lift?: (postId:number) => void};
const UserComponent: FC<ITypeUserComponent> = ({user, lift}) => {

    const onClickHandler =()=>{
        if(lift){
            lift(user.id)
        }
    }

    return (
        <div className={styles.user_box}>
            <h2>User {user.id}:</h2>
            <button onClick={onClickHandler}>Show user`s posts</button>
            <ul className={styles.without_bullet}>
                {
                    goThrough(user)
                }
            </ul>
        </div>
    );
};

export default UserComponent;
