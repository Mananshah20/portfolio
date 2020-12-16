import emailjs from "emailjs-com";
import React from 'react';
import contact from "../css/contact.css"
import mail from "../images/mail.png"
import bg from "../images/bg.jpg"
import img1 from "../images/img-01.png"

export default function ContactUs() {

    function sendemail(e) {
        e.preventDefault();

        emailjs.sendForm('gmail', 'template_f3kcvwx', e.target, 'user_aTA7W6hNcZu3nvmqcoPKj')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset()
    }



    return (
        <div className="contacts" id="contact">
            <div className="container ">
                <h1 className="contactstext">Contact <span className="contactstext2">Me</span></h1>
                <div class="contact_container">
                    <div class="wrap-contact100">
                        <form class="contact-form" onSubmit={sendemail}>
                            <span class="contact_form_title">
                                Reach out to me anytime</span>


                            <div class="contact_input" >
                                <label class="label-input100" for="name">Full name</label>
                                <input id="name" class="input100" type="text" name="name" placeholder="Enter your name..."></input>

                            </div>


                            <div class="contact_input" >
                                <label class="label-input100" for="email">Email Address</label>
                                <input id="email" class="input100" type="text" name="email" placeholder="Enter your email..."></input>
                            </div>



                            <div class="contact_input" >
                                <label class="label-input100" for="message">Message</label>
                                <textarea id="message" class="input100" name="message"
                                    placeholder="Type your message here..."></textarea>
                            </div>

                            <div class="container-contact-form-btn">
                                <button class="contact-form-btn">
                                    Send
					</button>
                            </div>


                        </form>

                        <div class="contact_background flex-col-c-m" style={{ backgroundImage: `url(${bg})` }}>
                        </div>
                    </div>
                </div>
            </div>
        </div >


    )
}