import React from 'react';
import "./SideBar.css"

const SideBar = ({ cartCount }) => {
    // console.log(cartCount)
    return (
        <div className='sidebar'>
            <h6>Total Product : {cartCount} </h6>
            <h6>Total Price : 0 </h6>
            <button className='btn btn-primary'>Chose for me</button>
        </div>
    );
};

export default SideBar;