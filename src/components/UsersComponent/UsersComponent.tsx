import React, {FC, useEffect, useState} from 'react';
import UserComponent from "../UserComponent/UserComponent";
import {IUserModel} from "../../models/IUserModel";
import {getAllUsers} from "../../services/users.api.services";

type ITypePropsUsers = {lift?:(postId:number)=>void};

const UsersComponent: FC<ITypePropsUsers> = ({lift}) => {

    const [users, setUsers] = useState<IUserModel[]>([])
    useEffect(()=>{

        getAllUsers().then(({data})=> setUsers(data.users))
    }, [users])

    return (
        <div>
            {
                users.map((user)=>(<UserComponent key={user.id} user={user} lift={lift} />))
            }
        </div>
    );
};

export default UsersComponent;



// id={user.id} firstName={user.firstName} lastName={user.lastName} maidenName={user.maidenName} age={user.age} gender={user.gender} email={user.email} phone={user.phone} username={user.username} password={user.password} birthDate={user.birthDate} image={user.image} bloodGroup={user.bloodGroup} height={user.height} weight={user.weight} eyeColor={user.eyeColor} hair={user.hair} domain={user.domain} ip={user.ip} address={user.address} macAddress={user.macAddress} university={user.university} bank={user.bank} company={user.company} ein={user.ein} ssn={user.ssn} userAgent={user.userAgent} crypto={user.crypto}