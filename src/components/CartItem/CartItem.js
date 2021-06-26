import React from 'react';
import './CartItem.css';
const CartItem = (props) => {
    const { productPrice, productTitle, quantity, productId } = props.item;
    const price = parseInt(productPrice);
    const quan = parseInt(quantity);
    const subTotal = price * quan;
    const hendleDeleteItem = () =>{
        fetch('http://localhost:5001/deleteOdder',{
            method: 'POST',
            headers: {
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify({productId})
        })
        .then(res => res.json())
    }
    
    return (
        <div className="container">

            <table>
                <tr>
                    <td>{productTitle}</td>
                    <td>{productPrice}</td>
                    <td>{quantity}</td>
                    <td>{subTotal}</td>
                    <td> <button className="btn btn-danger" onClick={hendleDeleteItem}>DELETE</button> </td>
                </tr>
            </table>

        </div>
    );
};

export default CartItem;