import React, { useEffect, useState } from 'react';
import "./AllProducts.css";
const AllProducts = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch("data.json")
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    console.log(products);
    return (
        <div>
            <h1>Hooom Made</h1>
        </div>
    );
};

export default AllProducts;