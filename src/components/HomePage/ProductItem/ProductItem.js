import React, { useState } from 'react';
import './ProductItem.css';
import { addToDatabaseCart } from '../../databaseManager/databaseManager';
import { Link } from 'react-router-dom';
const ProductItem = (props) => {
    // const count = 2;
    const hendleAddProduct = () =>{
        localStorage.setItem("productId", id)
    }
    const { title, drescription, imgURL, price, id } = props.item;
    
    return (
        <div className="container mt-3 hover">
            <div class="card custome-card" style={{ width: "100%" }}>
                <img class="card-img-top" style={{ width: "100%" }} src={imgURL} alt="Card image cap" />
                <div class="card-body">
                    <h5 class="card-title card-heading">{title}</h5>
                    <p class="card-text service-text">{drescription}</p>
                    <h5>{price}</h5>
                   <Link to={"/odder/" + id}><a href="#" class="btn btn-primary" onClick={hendleAddProduct}>আরো দেখুন</a></Link>
                </div>
            </div>

        </div>


    );
};

export default ProductItem;