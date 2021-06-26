import React from 'react';
import './OurTeamMember.css';
const OurTeamMember = (props) => {
    const { name, description, education, img } = props.member;
    return (
        <div class="card card-content p-2" 
        data-aos="fade-right"
         data-aos-duration="1000" style={{width: "18rem"}}>
            <img src={img} class="card-img-top" alt="..." />
            <div class="card-body">
                <h5 class="card-title">{name}</h5>
                <p class="card-text">{education}</p>
                <p class="card-text">{description}</p>
                <a href="#" class="btn btn-primary">Chack Out</a>
            </div>
        </div>
    );
};

export default OurTeamMember;