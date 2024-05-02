import React, {FC} from 'react';
import styles from "./product.module.css"

export interface IProductProps {
    id: number,
    title: string,
    description: string,
    price: number,
    discountPercentage: number,
    rating: number,
    stock: number,
    brand: string,
    category: string,
    thumbnail: string,
    images: string[],
}

export type IProductTypeProps = IProductProps & {children ?:React.ReactNode};
const Product: FC<IProductTypeProps> = ({id,title,description,price,discountPercentage,rating,stock,brand,category,thumbnail,images}) => {
    return (
        <div className={`${styles.box}`}>

            <h2 className={styles.center}>Product {id}. {title}</h2>
            <span className={styles.center}><img src={thumbnail} alt={title}/></span><br/>

            <div className={`${styles.center} ${styles.column}`}>
                <div className={`${styles.block} ${styles.small_text}`}>
                    <p>{description}</p>
                    <span><b className={styles.big_text}>Price: {price}$</b> </span><br/>
                    <span><b className={styles.medium_text}>Discount: {discountPercentage}%</b></span>
                    <h3>Characteristics:</h3>
                    <ul>
                    <li>Rating: {rating}</li>
                        <li>Stock: {stock}</li>
                        <li>Brand: {brand}</li>
                        <li>Category: {category}</li>
                    </ul>
                    <h3>More photos:</h3>
                </div>

            </div>

            <div className={`${styles.display_flex} ${styles.image_box}`}>

                {
                    images.map((image_src, index) => <div key={index}><img src={image_src} alt={description}/></div>)
                }
            </div>
        </div>
    );
};

export default Product;