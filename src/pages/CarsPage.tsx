import React, {useEffect, useState} from 'react';
import {carService} from "../services/api.service";
import CarsComponent from "../components/CarsComponenr/CarsComponent";
import {ICarPaginatedModel} from "../models/ICarPaginatedModel";
import {useSearchParams} from "react-router-dom";
import PaginationComponent from "../components/PaginationComponent/PaginationComponent";

const CarsPage = () => {

    const [query, setQuery] = useSearchParams({page: "1"});

    const [carPaginatedObject, setCarPaginatedObject] = useState<ICarPaginatedModel>({
        total_items: 0,
        total_pages: 0,
        prev: null,
        next: null,
        items: []});

    useEffect(()=>{
        carService.getCars(query.get("page")||"1").then(value=>{
            if(value){
                setCarPaginatedObject(value);
            }
        })
    },[query])

    return (
        <div>
            <CarsComponent cars={carPaginatedObject.items}/>
            <PaginationComponent carPaginatedObject={carPaginatedObject}/>
        </div>
    );
};

export default CarsPage;