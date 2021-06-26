import React, { useContext, useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { LoginContext } from '../../App';
import CartItem from '../CartItem/CartItem';
import './Cart.css';
import { Link } from 'react-router-dom';
const Cart = () => {
    const [logInUser, setLogInUser] = useContext(LoginContext);
    const email = logInUser.loginEmail;
    const data = {
        odderEmail: email
    }
    const [cart, setCart] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5001/cartItem', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => setCart(data))
    }, [])

    if (cart.length) {
        const subtotal = cart.map(item => parseInt(item.productPrice) * item.quantity);
        const total = subtotal.reduce((td, item) => td + item);
        localStorage.setItem('total', total)

    }
    const getTotal = localStorage.getItem('total');
    const [odderInfo, setOdderInfo] = useState({
        name: '',
        companyName: '',
        countryName: '',
        houseNumber: '',
        appoinment: '',
        town: '',
        drestris: '',
        postCode: '',
        phoneNO: '',
        customerEmail: email,
        TotalTaka: getTotal

    });
    console.log(odderInfo);
    const hendleBlur = (e) => {
        const copyOdderInfo = { ...odderInfo };
        copyOdderInfo[e.target.name] = e.target.value;
        setOdderInfo(copyOdderInfo)
    }
    const hendlePlaceOdder = (e) => {
        fetch('http://localhost:5001/odderPlace', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(odderInfo)
        })
            .then(res => {
                if (res) {
                    res.json()
                    alert("odder Placed Success")
                }
            })
        e.preventDefault();
    }
    return (
        <div style={{ backgroundColor: '#FCFBFB', width: '100%' }}>
            <nav class="navbar navbar-expand-lg navbar-light bg-light sticky-top">
                <div class="container-fluid">
                    <a class="navbar-brand" href="/">Mr.BD Promotion</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
                        <ul class="navbar-nav ml-auto">
                            <li class="nav-item">

                                <Link to="/"><a class="nav-link active" aria-current="page" href="/">Home</a></Link>
                            </li>
                            <li class="nav-item">

                                <Link to="/"><a class="nav-link" href="#service">Service</a></Link>
                            </li>

                            <li class="nav-item">

                                <Link to="/"><a class="nav-link" href="#whyus">Why Choose Us</a></Link>
                            </li>
                            <li class="nav-item">

                                <Link to="/"><a class="nav-link" href="#ourteam">Our Team</a></Link>
                            </li>
                            <li class="nav-item">
                                <Link to="/"><a class="nav-link" href="#contact">Contact Us</a></Link>
                            </li>
                            <li class="nav-item">
                                <Link to="/login"><a class="nav-link" href="#contact">Login</a></Link>
                            </li>
                            <li class="nav-item">
                                <p class="nav-link">Cart</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <h4><FontAwesomeIcon style={{ color: "white", fontSize: "25" }} icon={faShoppingCart} /> Card</h4>
            <div className="container">
                <table>
                    <tr>
                        <th>PRODUCT</th>
                        <th>PRODUCT PRICE</th>
                        <th>QUANTITY</th>
                        <th>SUBTOTAL</th>
                        <th>Status</th>
                    </tr>
                </table>
            </div>
            {/* <button onClick={viewCart}>View Cart</button> */}
            {cart.length ?
                cart.map(item => <CartItem item={item}></CartItem>)
                : null}
            <div className="container">
                <div className="row">
                    <div className="col">

                    </div>

                </div>
                <div className="container">
                    <div className="row">
                        <div className="col  odder-info-box">
                            <form action="">
                                <input className="form-control mt-5" type="text" onBlur={hendleBlur} name="name" placeholder="Enter Your Full Name" />
                                <input className="form-control mt-5" type="text" onBlur={hendleBlur} name="companyName" placeholder="COMPANY NAME" />
                                <input className="form-control mt-5 " type="text" onBlur={hendleBlur} name="countryName" placeholder="Country Name" />
                                <p>STREET ADDDRESS</p>
                                <input className="form-control mt-3" type="text" onBlur={hendleBlur} name="houseNumber" placeholder="HOUSE NUMBER AND STREET NAME" />
                                <input className="form-control mt-5" type="text" onBlur={hendleBlur} name="appoinment" placeholder="APPOINTMENT " />
                                <input className="form-control mt-5" type="text" onBlur={hendleBlur} name="town" placeholder="TOWN CITY" />
                                <p>DRESTREES</p>
                                <input className="form-control mt-5" type="text" onBlur={hendleBlur} name="drestris" placeholder="DRESTRES" />
                                <input className="form-control mt-5" type="text" onBlur={hendleBlur} name="postCode" placeholder="POST CODE" />
                                <input className="form-control mt-5" type="text" onBlur={hendleBlur} name="phoneNO" placeholder="PHONE NO" />
                                <div className="col total-box mt-5 pt-5">
                                    <h2 className="d-flex justify-content-end">TOTAL TAKA</h2>
                                    <h5 className="d-flex justify-content-end">Total: {getTotal}</h5>
                                    <div className="d-flex justify-content-end">
                                        <button type="submit" className="btn btn-primary" onClick={hendlePlaceOdder}>Place Odder</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>

                </div>

            </div>

        </div>
    );
};

export default Cart;