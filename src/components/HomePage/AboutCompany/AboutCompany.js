import React from 'react';
import './AboutCompany.css';
import about from '../../../images/about.jpg';

const AboutCompany = () => {

    return (
        <div className="p-5">
            <h2 className="text-center pt-5">ABOUT US</h2>
            <div className="contaner">
                <div className="row pt-3">
                    <div className="col  p-5" data-aos="fade-up" 
                        data-aos-offset="200"
                        data-aos-duration="1000"
                        data-aos-easing="ease-in-out"
                        data-aos-mirror="true"
                        data-aos-once="false"
                        data-aos-anchor-placement="top-center"
                        >
                        <img className="about-img" style={{ height: "auto", width: "100%" }} src={about} alt="" />
                    </div>
                    <div data-aos="fade-up" 
                        data-aos-offset="200"
                        data-aos-delay="50"
                    className="col m-5 pt-5 about-text-bg">
                        <h5 className="text">এটি একটি ডিজিটাল সেবাদানকারী প্রতিষ্ঠান। ডিজিটাল দুনিয়ায় আপনার ব্যাবসাকে পরিচিত করানো আমাদের লক্ষ্য। Mr. BD Promotion আপনার ব্যাবসার বিশ্বস্ত সহযোগী ।</h5>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutCompany;