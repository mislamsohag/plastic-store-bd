import React from 'react';
import "./SideBar.css"

const SideBar = ({ cartCount }) => {
    // console.log(cartCount)
    return (
        <div className='sidebar'>
            <h6>Total Product : {cartCount} </h6>
            <h6>Total Price : 0 </h6>
        </div>
    );
};

export default SideBar;