import React, { useEffect, useState } from 'react';
import SingleProducts from '../SingleProducts/SingleProducts';
import "./AllProducts.css";


const AllProducts = ({ cartCountSet }) => {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch("data.json")
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    // console.log(products);
    return (
        <div>
            <h1 className='text-center'>All Products</h1>

            <div className='row container'>
                {
                    products.map((productDetails) => (
                        <SingleProducts cartCountSet={cartCountSet} product={productDetails} key={productDetails.id} />
                    ))}
            </div>
        </div>
    );
};

export default AllProducts;