import React, {FC, useEffect, useState} from 'react';
import Product, {IProductProps} from "../product/product";

const Products:FC = () => {
    const [products, setProducts] = useState<IProductProps[]>([]);

   useEffect(()=>{
       fetch('https://dummyjson.com/products')
           .then(res=> res.json())
           .then(({products})=>{
               setProducts(products)
           })
   }, []);
   console.log(".");

    return (
        <div>
            {
                products.map(
                    (value :IProductProps) =>
                    (<Product id={value.id} title={value.title} description={value.description} price={value.price} discountPercentage={value.discountPercentage} rating={value.rating} stock={value.stock} brand={value.brand} category={value.category} thumbnail={value.thumbnail} images={value.images} />)
                )
            }
        </div>
    );
};

export default Products;