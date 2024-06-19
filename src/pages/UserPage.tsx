import React, {useEffect} from 'react';
import {useParams} from "react-router-dom";
import {useAppDispatch, useAppSelector} from "../redux/store";
import {userActions} from "../redux/slices/UserSlice";

const UserPage = () => {

    let {userId} = useParams();
    const dispatch = useAppDispatch();
    const {user}= useAppSelector(state=>state.userSlice);

    useEffect(() => {
        dispatch(userActions.loadUserById(userId));
    }, [userId]);
    return (
        <div>
            {
                user && user.email
            }
        </div>
    );
};

export default UserPage;