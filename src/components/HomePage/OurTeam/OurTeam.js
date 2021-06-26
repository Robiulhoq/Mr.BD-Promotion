import React from 'react';
import './OurTeam.css';
import TeamData from '../../../FakeData/TeamData/TeamData.json';
import OurTeamMember from '../OurTeamMember/OurTeamMember';

const OurTeam = () => {
    return (
        <div id="ourteam" className="container mt-5">
            <h3 className="text-center">OUR TEAM</h3>
           <div className="row" >
            <div className="col out-team justify-content-center">
            {
                TeamData.map( member => <OurTeamMember member={member}></OurTeamMember>)
            }
            </div>
           </div>
        </div>
    );
};

export default OurTeam;