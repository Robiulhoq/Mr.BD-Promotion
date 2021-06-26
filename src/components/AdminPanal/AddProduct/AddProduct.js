import React, { useState } from 'react';
import productData from '../../../FakeData/ProductData/ProductData.json';


const AddProduct = () => {
    const [product, setProduct] = useState({
        id: '',
        title: '',
        price: '',
        drescription: '',
        imgURL: ''
    })
    console.log(product);
    // const hendleAddProduct = (event) => {
    //     fetch("http://localhost:5001/addProduct", {
    //         method: 'POST',
    //         headers: {
    //             'content-type': 'application/json'
    //         },
    //         body: JSON.stringify(product)
    //     })

    //         .then(res => {
    //             if(res){
    //                 alert("Products add Success")
    //             }
    //         })
            
    //         event.preventDefault();
    // }
const hendleBlur = (e) =>{
    const inputValue = {...product}
    inputValue[e.target.name] = e.target.value;
    setProduct(inputValue)
}
    return (
        <div>
           <form action="">
           <div className="container">
           <div class="input-group input-group-sm mb-3">
                <input type="text" class="form-control" onBlur={hendleBlur} name="id" placeholder="product ID"/>
            </div>
            <div class="input-group input-group-sm mb-3">
                <input type="text" class="form-control" onBlur={hendleBlur} name="title" placeholder="Title" />
            </div>
            <div class="input-group input-group-sm mb-3">
                <input type="text" class="form-control" onBlur={hendleBlur} name="price" placeholder="Price" />
            </div>
            <div class="input-group input-group-sm mb-3">
                <input type="text" class="form-control" onBlur={hendleBlur} name="drescription" placeholder="drescription"/>
            </div>
            <div class="input-group input-group-sm mb-3">
                <input type="text" class="form-control" onBlur={hendleBlur} name="imgURL" placeholder="Images Url"/>
            </div>
            {/* <button className="btn btn-primary" type="submit"  onClick={hendleAddProduct}>add Product</button> */}
            </div>
            </form> 
           
        </div>
    );
};

export default AddProduct;