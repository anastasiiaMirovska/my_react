import React, {FC} from 'react';
import {IUserModel} from "../../models/UserModel";
import styles from "./User.module.css"
import {goThrough} from "../../services/goThroughObject"


export interface IUserProp{
    user: IUserModel
}

export type ITypeUserComponent = IUserProp & { children?: React.ReactNode }
const UserComponent: FC<ITypeUserComponent> = (value) => {
    return (
        <div>
            <h2>User:</h2>

            <ul className={styles.without_bullet}>
                {
                    goThrough(value.user)
                }
            </ul>
        </div>
    );
};

export default UserComponent;
