import React, { useContext, useState } from 'react';
import { Redirect } from 'react-router';
import { LoginContext } from '../../App';
import AddToCart from '../AddToCart/AddToCart';
import Cart from '../Cart/Cart';
import PrivatedRoute from '../PrivatedRoute/PrivatedRoute';
import './OdderItem.css';
import { Link } from 'react-router-dom';


const OdderItem = (props) => {
    const { title, img, price, drescription, id } = props.odder;
    const [count, setCount] = useState(1);

    const incrice = () => {
        setCount(count + 1)
    }
    const decrice = () => {
        if (count <= 0) {
            setCount(0)
        }
        else {
            setCount(count - 1)
        }

    }
    const [logInUser, setLogInUser] = useContext(LoginContext);
    console.log(logInUser);
    const addToCardDetails = {
        ...logInUser,
        productId: id,
        productTitle: title,
        quantity: count,
        productPrice: price
    }
    
    const hendleAddToCart = () => {
        console.log("product add");
        fetch('http://localhost:5001/addToCard', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(addToCardDetails)
        })
            .then(res => res.json())
            .then(data => {
                if(data){
                    alert("Odder add To Cart")
                }
            })
    }

    return (
        <div>
            <div className="odder-content d-flex justify-content-center">
                <h1 className="pt-5 odder-head">{title}</h1>
                <div className="d-flex justify-content-end">
                <Link to="/cart"><button className="btn btn-danger ">View Cart</button> </Link>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col col-sm-6 mt-5">
                        <img className="img-fluid" src={img} alt="" />
                    </div>
                    <div className="col col-sm-6 mt-5">
                        <h5 className="mine-head pt-5">{title}</h5>
                        <h4>{price}</h4>
                        <h6>{count}</h6>
                        <div className="d-flex">
                            <button className="btn btn-primary" onClick={incrice}>Incrice</button>
                            <button className="btn btn-success" onClick={decrice}>Decrice</button>
                        </div>
                        <AddToCart count = {count} hendleAddToCarts = {hendleAddToCart}></AddToCart>

                        <p className="pt-5">{drescription}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OdderItem;
