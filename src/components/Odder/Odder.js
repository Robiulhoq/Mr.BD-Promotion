import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import data from '../../FakeData/ProductData/ProductData.json';
import Navbar from '../HomePage/Navbar/Navbar';
import OdderItem from '../OdderItem/OdderItem';


const Odder = () => {
    const id = localStorage.getItem("productId")
    const [addToCardProduct, setAddtoCardProduct] = useState([]);
    useEffect(() => {
            const odderProduct = data.filter(product => product.id == id);
            setAddtoCardProduct(odderProduct)
        
    }, [])
   
    return (
        <div>
            
            {addToCardProduct.length?
                
                addToCardProduct.map(odderItem => <OdderItem odder={odderItem}></OdderItem>)
            :null}
            
        </div>
    );
};

export default Odder;