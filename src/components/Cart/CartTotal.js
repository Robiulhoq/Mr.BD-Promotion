import React from 'react';

const CartTotal = (props) => {
    const {productPrice} = props.odder;
    return (
        <div className="cart-total">
        <h3>CART TOTAL</h3>
        <h5>Subtotal {productPrice}</h5>
        <h5>Total</h5>

    </div>
    );
};

export default CartTotal;