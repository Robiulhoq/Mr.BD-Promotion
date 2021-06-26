import React from 'react';
import './ContactForm.css';

const ContactForm = () => {
    return (
        <div id="contact" className="container">
            <h1 className="text-center mt-3 contact-heading mt-5" data-aos="fade-down">CONTACT US</h1>
            <div className="row">
                <div className="col mt-5">
                    <h3>GET IN TOUCH</h3>
                    <p>I have worls-class, flexible support via live chat, email <br /> and hone. I guarantee that you’ll be able to have any issue <br /> resolved within 24 hours.</p>
                    <br />
                    <h6>PHONE</h6>
                    <p>01868-031014</p>
                    <br />
                    <h6>EMAIL</h6>
                    <p>mrbdpormotion@gmail.com</p>
                    <br />
                    <h6>FACEBOOK PAGE</h6>

                    <p><a href="https://facebook.com/mrbdpromotion" target="blank">Mr.BD Promotion</a></p>

                    <h6>ADDRESS</h6>
                    <p>MOHIPAL PLAZA 4TH FOOLOR, FENI <br />
                    BANGLADESH</p>
                </div>
                <div className="col mt-5" data-aos="fade-left"
                            data-aos-duration="2000">
                    <form action="">
                        <div class="input-group mb-3">
                            <input type="text" placeholder="Enter Your Name" class="form-control" />
                        </div>
                        <div class="input-group mb-3">
                            <input type="text" placeholder="Enter Your Email" class="form-control" />
                        </div>
                        <div class="form-floating">
                            <textarea class="form-control" placeholder="Leave a comment here" id="floatingTextarea" colums="3"></textarea>

                        </div>
                        <button type="submit" className="btn btn-primary mt-2">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ContactForm;