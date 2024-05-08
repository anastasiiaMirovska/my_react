import {useEffect, useState} from "react";

export const useStorage = (key:any,defaultValue:any, localStorageObject:any)=>{
    const[value, setValue] = useState(()=>{
        let jsonValue = localStorageObject.getItem(key);
        if(jsonValue !== null) return JSON.parse(jsonValue);
        if(typeof defaultValue ==='function'){
            return defaultValue();
        }
        else{
            return defaultValue;
        }
    });

    useEffect(()=>{
        if(value===undefined) return localStorageObject.removeItem(key);
        localStorageObject.setItem(key, JSON.stringify(value));
    },[key, value, localStorageObject])
    return [value, setValue]
}