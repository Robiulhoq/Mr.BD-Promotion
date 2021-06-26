import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { LoginContext } from '../../App';

const AddToCart = (props) => {
    const { count } = props.count;
    console.log(props.hendleAddToCart);
    const [logInUser, setLogInUser] = useContext(LoginContext);
    return (
        <div>
            {
                logInUser.loginEmail?
                <button className="btn btn-warning mt-2" onClick={() =>props.hendleAddToCarts()}>AddToCart</button>
            :
            <Link to="/login"><button className="btn btn-warning mt-2">AddToCart</button></Link>
            }
            
        </div>
    );
};

export default AddToCart;