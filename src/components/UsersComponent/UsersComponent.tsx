import React, {FC} from 'react';
import {IUserModel} from "../../models/IUserModel";
import UserComponent from "../UserComponent/UserComponent";
import styles from "../components.styles.module.css"

interface IProps{
    users: IUserModel[]
}
const UsersComponent:FC<IProps> = ({users}) => {
    return (
        <div className={styles.big_block}>
            {
                users.map((user:IUserModel)=><UserComponent key={user.id} user={user}/>)
            }
        </div>
    );
};

export default UsersComponent;