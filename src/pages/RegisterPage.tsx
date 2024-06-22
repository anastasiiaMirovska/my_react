import React, {useState} from 'react';
import {SubmitHandler, useForm} from "react-hook-form";
import {ITokenObtainPair} from "../interfaces/ITokenObtainPair";
import {authService} from "../services/auth.service";
import {useNavigate} from "react-router-dom";

const RegisterPage = () => {
    const {handleSubmit,register} = useForm<ITokenObtainPair>({mode:"all"});

    const [error, setError] = useState<boolean>(null);
    const navigate = useNavigate();

    const registerUser:SubmitHandler<ITokenObtainPair> = async (userData:ITokenObtainPair)=>{
        console.log(userData)
        try{
            await authService.register(userData);
            setError(false);
            navigate("/login");
        }
        catch{
            setError(true);
        }

    }

    return (
        <div>
            <form onSubmit={handleSubmit(registerUser)}>
                <input type="text" placeholder={"username"} {...register("username")}/>
                <input type="text" placeholder={"password"} {...register("password")}/>
                <button>Submit</button>
            </form>
            {
                error && <div>This user already exists</div>
            }
        </div>
    );
};

export default RegisterPage;