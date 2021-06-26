import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../images/logo1.png';
import Cart from '../../Cart/Cart';
import './Navbar.css';
const Navbar = () => {
  // const { cartItem } = props.cartItem;
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light sticky-top">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">Mr.BD Promotion</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#">Home</a>
            </li>
            <li class="nav-item">
            <a class="nav-link" href="#service">Service</a>
            </li>
           
            <li class="nav-item">
              <a class="nav-link" href="#whyus">Why Choose Us</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#ourteam">Our Team</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#contact">Contact Us</a>
            </li>
            <li class="nav-item">
              <p  class="nav-link">Cart</p>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;