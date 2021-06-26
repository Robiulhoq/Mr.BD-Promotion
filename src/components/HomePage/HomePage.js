import React from 'react';
import ContactForm from './ContactForm/ContactForm';
import Header from './Header/Header';
import './HomePage.css';
import Navbar from './Navbar/Navbar';
import Product from './Product/Product';
import WhyChooseus from '../WhyChooseUs/WhyChooseus';
const HomePage = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Header></Header>
            <Product></Product>
            {/* <AboutCompany></AboutCompany> */}
            <WhyChooseus></WhyChooseus>
            {/* <OurTeam></OurTeam> */}
            <ContactForm></ContactForm>
            
            {/* <Footer></Footer> */}
        </div>
    );
};

export default HomePage;