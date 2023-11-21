import React, { useState } from 'react';
import cart1 from './assets/cart1.png'
const CartWidget = () => {
    return (
        <div className="cartWidget">
            <img src={cart1} alt="carrito" />
        </div>
    )
}

export default CartWidget