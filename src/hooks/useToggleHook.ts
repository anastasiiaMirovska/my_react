import {useState} from "react";

export const UseToggle = (startValue:boolean)=>{
    const [value, setValue] = useState<boolean>(startValue);

    const toggleValue=() =>{
        setValue(currentValue=> !value)
    }
    return [value, toggleValue] as const
}