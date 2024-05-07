import {useRef, useState} from "react";

export const usePrevious = (value:any)=>{
    let cur_value = useRef(value);
    let prev_value = useRef();

    if(cur_value.current !== value){
        prev_value.current = cur_value.current;
        cur_value.current = value;
    }
    return prev_value.current;
}