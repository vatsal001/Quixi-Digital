import React, { useState } from 'react';
import SimpleReactValidator from 'simple-react-validator';

import ContentRout from '../../images/contact-round-shape.svg'
import contactImg from '../../images/contact-img.png'



const ContactSectionS2 = () => {
    const [forms, setForms] = useState({
        name: '',
        email: '',
        select: ''
    });

    const [validator] = useState(new SimpleReactValidator({
        className: 'errorMessage'
    }));

    const changeHandler = e => {
        setForms({ ...forms, [e.target.name]: e.target.value });
        validator.showMessages();
    };

    const submitHandler = e => {
        e.preventDefault();
        if (validator.allValid()) {
            setForms({
                name: '',
                email: '',
                select: ''
            });
            validator.hideMessages();
        } else {
            validator.showMessages();
        }
    };


    return (
        <section className="contact-section-s2 section-padding">
            <div className="container">
                <div className="contact-wrap">
                    <div className="row align-items-center">
                        <div className="col-lg-6 col-12">
                            <div className="contact-from">
                                <h3>let’s <span>Work Together</span> </h3>
                                <p>It has stood the test of time and proceeds Elevate your brand</p>
                                <form id="form2" onSubmit={submitHandler}>
                                    <div className="row">
                                        <div className="col-lg-6 col-12">
                                            <label>First name</label>
                                            <input
                                                type="text"
                                                name="name"
                                                value={forms.name}
                                                onChange={changeHandler}
                                                placeholder="Name"
                                                onBlur={() => validator.showMessageFor('name')}
                                            />
                                            {validator.message('name', forms.name, 'required|alpha_space')}
                                        </div>
                                        <div className="col-lg-6 col-12">
                                            <label>Email address</label>
                                            <input
                                                type="email"
                                                name="email"
                                                value={forms.email}
                                                onChange={changeHandler}
                                                placeholder="example@example.com"
                                                onBlur={() => validator.showMessageFor('email')}
                                            />
                                            {validator.message('email', forms.email, 'required|email')}
                                        </div>
                                        <div className="col-12">
                                            <label>Service Type</label>
                                            <select id="serviceType"
                                                name="select"
                                                value={forms.select}
                                                onChange={changeHandler}
                                                onBlur={() => validator.showMessageFor('select')}>
                                                <option value="">Select a Service</option>
                                                <option value="Subject 1">Subject 1</option>
                                                <option value="Subject 2">Subject 2</option>
                                                <option value="Subject 3">Subject 3</option>
                                            </select>
                                            {validator.message('select', forms.select, 'required')}
                                        </div>
                                        <div className="col-12">
                                            <button type="submit">SEND MESSAGE</button>
                                            <div className="message" id="message1">
                                                {validator.allValid() ? 'All fields are valid!' : ''}
                                            </div>

                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className="contact-image">
                        <div className="shape">
                            <svg width="1067" height="1136" viewBox="0 0 1067 1136" fill="none">
                                <g opacity="0.45" filter="url(#filter0_f_373_1379)">
                                    <rect width="610.839" height="610.216"
                                        transform="matrix(0.972706 0.23204 0.23204 -0.972706 200.078 793.561)"
                                        fill="#BAE900" />
                                </g>
                                <defs>
                                    <filter id="filter0_f_373_1379" x="0.078125" y="0" width="1135.76" height="1135.3"
                                        filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                        <feFlood floodOpacity="0" result="BackgroundImageFix" />
                                        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                                        <feGaussianBlur stdDeviation="100" result="effect1_foregroundBlur_373_1379" />
                                    </filter>
                                </defs>
                            </svg>

                        </div>
                        <div className="round-shape">
                            <img src={ContentRout} alt="" />
                        </div>
                        <div className="image">
                            <img src={contactImg} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactSectionS2;
