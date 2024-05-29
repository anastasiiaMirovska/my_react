import React, {FC, FormEvent, useState} from 'react';

interface IFormProps{
    username: string,
    password: string
}
const FormComponent:FC = () => {
    const [formState, setformState] = useState<IFormProps>({
        username:"Anastasiia",
        password:"password"
    })
    const handleSubmit = (e:FormEvent<HTMLFormElement>)=>
    {
        e.preventDefault();
        let user ={
            username: formState.username,
            password: formState.username
        }
        console.log(user);
    }

    const handleInputChange = (e:FormEvent<HTMLInputElement>)=>{
        const input = e.currentTarget;
        console.log(input.name);
        setformState({...formState, [input.name]: input.value});
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" name={'username'} value={formState.username} onChange={handleInputChange}/>
                <input type="text" name={'password'} value={formState.password} onChange={handleInputChange}/>
                <button>save</button>
            </form>
        </div>
    );
};

export default FormComponent;