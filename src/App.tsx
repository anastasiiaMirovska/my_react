import React, {useState} from 'react';
import { useAppDispatch, useAppSelector} from "./redux/store";
import {customIncrement, decrement, increment, reset} from "./redux/slices/slice1";
import {useForm} from "react-hook-form";
import {IFormModel} from "./models/IFormModel";
import {joiResolver} from "@hookform/resolvers/joi";
import FormValidator from "./validators/form.validators";
import './styles/styles.css'

const App = () => {
    //const {value} = useSelector((state:any)=>state.slice1); //незручно, бо фактично немає типізації
    const {value} = useAppSelector((state)=>state.slice1);
    //const dispatch = useDispatch();
    const dispatch = useAppDispatch();

    const{handleSubmit, register, formState:{errors, isValid}}
        =useForm<IFormModel>({mode:"all", resolver: joiResolver(FormValidator)});


    const [increaseNumber, setIncreaseNumber]= useState<{increase:number}|null|void>(null);

    const customHandler = (increaseNumber:IFormModel)=>{
        setIncreaseNumber(increaseNumber);
    }

    return (
        <div>
            <form onSubmit={handleSubmit(customHandler)}>
                <label>By how much do you want to increase the number?(Custom increment)</label><br/>
                <input type="number" {...register("increase")}/>
                {errors.increase && <p className={"error_message"}>{errors.increase.message}</p>}
                <button disabled={!isValid}>Submit</button>
            </form>


            <h3>{value}</h3>
            
            <button onClick={()=>{
                dispatch(increment())
            }}>
                increment
            </button>
            
            
            <button onClick={()=>{
                //dispatch(counter1Slice.actions.increment());
                increaseNumber && dispatch(customIncrement(increaseNumber.increase));
            }} disabled ={!increaseNumber}>
                custom increment
            </button>

            <button onClick={()=>{
                //dispatch(counter1Slice.actions.decrement());
                dispatch(decrement());
            }}>
                decrement
            </button>

            <button onClick={()=>{
                dispatch(reset())
            }}>
                reset
            </button>

        </div>
    );
};

export default App;
