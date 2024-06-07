import React, {useEffect, useState} from 'react';
import {ICarWithAuthModel} from "../models/ICarWithAuthModel";
import {carService} from "../services/api.service";
import CarsComponent from "../components/CarsComponenr/CarsComponent";

const CarsPage = () => {

    const [cars, setCars] = useState<ICarWithAuthModel[]>([]);

    useEffect(()=>{
        carService.getCars().then(value=>{
            console.log(value)
            if (value){
                setCars([...value.items])
            }
        })
    },[])

    return (
        <div>
            <CarsComponent cars={cars}/>
        </div>
    );
};

export default CarsPage;