import React from 'react';
import './Header.css';
import header from '../../../images/main-header.png';


const Header = () => {
    return (
        <div className="header-main">
           <div className="row">
               <div className="col main-text-box d-flex justify-content-center align-items-center"  data-aos="fade-right" data-aos-duration="2000">
                    <h1>ব্যবসা আপনার <br /> প্রচারণা <span className="spacial-text"> আমাদের</span> <br />  <h6 className="sub-text"> Mr. BD Promotion আপনার ব্যবসায় বৃদ্ধিতে  সর্বদা প্রস্তুত</h6> <br /> 
                     <button className="btn btn-danger" data-aos="fade-up" data-aos-duration="2000" href="" ><a className="button-a header-btn" href="#service"> GO OUR SERVICE</a></button> </h1>
                    
               </div>
               <div className="col d-flex justify-content-center align-items-center" data-aos="fade-left" data-aos-duration="2000">
                    <img className="img-fluid" src={header} alt="" />
               </div>
           </div>

        </div>
    );
};

export default Header;