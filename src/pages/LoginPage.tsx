import React from 'react';
import {ITokenObtainPair} from "../interfaces/ITokenObtainPair";
import {SubmitHandler, useForm} from "react-hook-form";
import {all} from "axios";
import {useAppDispatch, useAppSelector} from "../hooks/redux.hooks";
import {AuthActions} from "../redux/slices/authSlice";
import {useNavigate} from "react-router-dom";

const LoginPage = () => {
    const {handleSubmit, register} = useForm<ITokenObtainPair>({mode:"all"});

    const dispatch  = useAppDispatch();
    const {error} = useAppSelector(state=> state.authSlice);
    const navigate = useNavigate();

    const loginMe:SubmitHandler<ITokenObtainPair> = async (user)=>{
        const {meta:{requestStatus}}= await dispatch(AuthActions.login({user}));
        if(requestStatus==="fulfilled"){
            navigate("/cars")
        }
    }


    return (
        <div>
            <form onSubmit={handleSubmit(loginMe)}>
                <input type="text" placeholder={"username"} {...register("username")}/>
                <input type="text" placeholder={"password"} {...register("password")}/>
                <button>Login</button>
                {
                    error && <div>Username or password is incorrect</div>
                }
            </form>
        </div>
    );
};

export default LoginPage;