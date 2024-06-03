import React, {useEffect, useState} from 'react';
import {IUserModel} from "../models/IUserModel";
import {usersApiService} from "../services/users.api.service";
import UsersComponent from "../components/UsersComponent/UsersComponent";

const UsersPage = () => {
    const [users, setUsers] = useState<IUserModel[]>([]);
    useEffect(()=>{
        usersApiService.getAllUsers().then(resp=>{
            if(resp){
                setUsers([...resp.data])
            }
        })
    },[])

    return (
        <div>
            <UsersComponent users={users}/>
        </div>
    );
};

export default UsersPage;