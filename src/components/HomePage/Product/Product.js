import React, { useEffect, useState } from 'react';
import './Product.css';
import ProductItem from '../ProductItem/ProductItem';



const Product = () => {
    const [product, setProduct] = useState([])
   useEffect(() =>{
       fetch('http://localhost:5001/allProduct')
       .then(res => res.json())
       .then(data => setProduct(data))
   },[])
    
    return (
       <div id="service">
           <h2 className="text-center pt-5 pb-4 service-container">OUR SERVICE</h2>
           {/* <div className="underline d-flex justify-content-center"></div> */}
          <div className="container pt-3 product-custome">
           <div className="row">
               <div className="col card-box">
           {
               product.map(product => <ProductItem item={product}></ProductItem>)
           }
               </div>
           </div>
       
       </div>
          </div>
    
      
    );
};

export default Product;