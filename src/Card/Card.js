import React from "react";
import "./Card.css";
import { AiOutlineShoppingCart } from 'react-icons/ai';

// const Card = (props) => {
// console.log(props.data)
const Card = ({ data, handleAddToCart }) => {         // Destructuring করা হয়েছে
    const { name, id, img, bullet, capacity, action, price } = data;

    return (
        <div className="card">
            <div className="image-container">
                <img src={img} alt="" />
            </div>
            <div className="gun-info">
                <h1>{name}</h1>
                <p>Bullet Type :{bullet}</p>
                <p>Capacity :{capacity}</p>
                <p>Action :{action}</p>
            </div>
            <div className="add-to-cart">
                <button onClick={() => handleAddToCart(data)}><AiOutlineShoppingCart className="icon" /></button>
                <p>Price :{price}</p>
            </div>

        </div>
    )
}
export default Card;