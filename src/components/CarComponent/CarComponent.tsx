import React, {FC} from 'react';
import {ICarWithAuthModel} from "../../models/ICarWithAuthModel";

interface IProps{
    car:ICarWithAuthModel
}

const CarComponent:FC<IProps> = ({car}) => {
    return (
        <div>
            <h3>Car {car.id}:</h3>
            <span>Brand: {car.brand}</span><br/>
            <span>Price: {car.price}</span><br/>
            <span>Year: {car.year}</span><br/>
            <span>Photo: {car.photo}</span><br/>
        </div>
    );
};

export default CarComponent;