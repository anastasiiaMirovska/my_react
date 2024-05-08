import {useRef, useState} from "react";

export const usePrevious = <T,>(value:T) :T|undefined=>{
    let cur_value = useRef<T>(value);
    let prev_value = useRef<T|undefined>();

    if(cur_value.current !== value){
        prev_value.current = cur_value.current;
        cur_value.current = value;
    }
    return prev_value.current;
}