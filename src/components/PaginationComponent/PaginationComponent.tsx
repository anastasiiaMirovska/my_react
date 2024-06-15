import React, {FC} from 'react';
import {ICarPaginatedModel} from "../../models/ICarPaginatedModel";
import {useSearchParams} from "react-router-dom";
interface IProps{
    carPaginatedObject:ICarPaginatedModel,
}


const PaginationComponent:FC<IProps> = ({carPaginatedObject}) => {
    const [query, setQuery] = useSearchParams({page: "1"});

    const changePage =(action:string)=>{
        switch(action){
            case "prev":
                setQuery({...carPaginatedObject.prev});
                break;
            case "next":
                setQuery({...carPaginatedObject.next});
                break;
        }
    }

    return (
        <div>
            <button onClick={()=>{
                changePage("prev")
            }}
                    disabled={!carPaginatedObject.prev}
            >prev</button>
            <button onClick={()=>{
                changePage("next")
            }}
            disabled={!carPaginatedObject.next}
            >next</button>
        </div>
    );
};

export default PaginationComponent;