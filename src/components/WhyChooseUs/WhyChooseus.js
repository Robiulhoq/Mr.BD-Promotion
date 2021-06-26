import React from 'react';
import why from '../../images/whyChoose.png';

const WhyChooseus = () => {
    return (
        <div id="whyus" className="container">
            <div className="d-flex justify-content-center mt-5 pt-3 mb-5">
                <h2>কেন আমাদের সাথে ব্যবসা করবেন ?</h2>
            </div>
            <div className="row">
                <div className="col">
                    <div className="d-flex align-item-center" data-aos="fade-left"
                        data-aos-duration="2000">
                        <h3>এডভান্স টেকনোলজি</h3>
                    </div>
                    <div className="d-flex align-item-center mb-4" data-aos="fade-left"
                        data-aos-duration="2000">
                        <p>আমরা ব্যবহার করি এডভান্স প্রযুক্তি যা আপনার অনলাইন ব্যবসার জন্য দরকারি,
                            ৪র্থ শিল্প বিপল্বের এই সময়ে আপনি পিছিয়ে পড়লে পিছিয়ে পড়বে আপনার ব্যবসা।
                            আমরা নিশ্চিত করি টেকনোলজির সবোচ্চ ব্যবহার ,যা আপনার বিজনেস গ্রোর্থ সাহায্য
                            করবে এবং সেলস বৃদ্ধি করবে।
                        </p>
                    </div>
                </div>

                <div className="col d-flex align-item-center justify-content-center" data-aos="fade-left"
                    data-aos-duration="2000">
                    <img src={why} alt="" />
                </div>
            </div>
        </div>
    );
};

export default WhyChooseus;