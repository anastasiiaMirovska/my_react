import React, {useState} from 'react';
import {useForm} from "react-hook-form";
import {IAuthDataModel} from "../models/IAuthDataModel";
import {authService} from "../services/api.service";

const FormComponent = () => {
    const {
        register,
        handleSubmit
    } = useForm<IAuthDataModel>({defaultValues:{username:"user",password:"P@$$word1"}});

    const [isAuthState, setIsAuthState] = useState<boolean>(false);
    
    const authenticate = async(formData: IAuthDataModel)=>{
        const isAuth = await authService.authentication(formData);
        setIsAuthState(isAuth);
    }

    return (
        <div>
            <h3>Login form</h3>
            <div>
                {isAuthState? <span>Ok</span> : <span>not Ok</span>}
            </div>

            <form onSubmit={handleSubmit(authenticate)}>
                <input type={"text"} {...register("username")}/>
                <input type={"text"} {...register("password")}/>
                <button>Submit</button>
            </form>
        </div>
    );
};

export default FormComponent;