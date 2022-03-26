import React from 'react';
import "./SingleProducts.css"
import { FaCartPlus } from 'react-icons/fa';


const SingleProducts = ({ product, cartCountSet }) => {
    // console.log(product)
    const { id, name, img, weight, color, price, category } = product;
    return (
        <div className='col-md-6 col-lg-4 col-sm-12 g-3'>
            <div className='card container'>
                <div className='image-container'>
                    <img className=' img-fluid' src={img} alt="" />
                </div>
                <div className='product-info'>
                    <h3> {name}</h3>
                    <p>Color : {color}</p>
                    <p>Category : {category}</p>
                    <p>Weight : {weight}</p>
                </div>
                <div className='card-footer'>
                    <div >
                        <button onClick={cartCountSet} className='add-to-cart'><FaCartPlus /></button>

                    </div>
                    <h4>Price : {price}</h4>
                </div>
            </div>
        </div>
    );
};

export default SingleProducts;