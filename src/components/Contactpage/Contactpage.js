import React, { useState } from "react";

import Shape from "../../images/contact-left-img.jpg";
import SimpleReactValidator from "simple-react-validator";

const Contactpage = () => {
  const [forms, setForms] = useState({
    name: "",
    email: "",
    textarea: "",
  });
  const [validator] = useState(
    new SimpleReactValidator({
      className: "errorMessage",
    })
  );
  const changeHandler = (e) => {
    setForms({ ...forms, [e.target.name]: e.target.value });
    if (validator.allValid()) {
      validator.hideMessages();
    } else {
      validator.showMessages();
    }
  };
  const submitHandler = (e) => {
    e.preventDefault();
    if (validator.allValid()) {
      validator.hideMessages();
      setForms({
        name: "",
        email: "",
        textarea: "",
      });
    } else {
      validator.showMessages();
    }
  };

  return (
    <div>
      <section className="contact-page section-padding">
        <div className="container">
          <div className="office-info">
            <div className="row">
              <div className="col col-lg-4 col-md-6 col-12">
                <div className="office-info-item">
                  <div className="office-info-icon">
                    <div className="icon">
                      <i className="fi flaticon-placeholder"></i>
                    </div>
                  </div>
                  <div className="office-info-text">
                    <h2>address line</h2>
                    <p>
                      09/S One Commercial Space, Shayona City, Maharana Pratap
                      Rd,Ghatlodiya
                      <br /> Ahmedabad, Gujarat 380061
                    </p>
                  </div>
                </div>
              </div>
              <div className="col col-lg-4 col-md-6 col-12">
                <div className="office-info-item active">
                  <div className="office-info-icon">
                    <div className="icon">
                      <i className="fi flaticon-phone-call"></i>
                    </div>
                  </div>
                  <div className="office-info-text">
                    <h2>Phone Number</h2>
                    <p>+91 88490 62703 </p>
                  </div>
                </div>
              </div>
              <div className="col col-lg-4 col-md-6 col-12">
                <div className="office-info-item">
                  <div className="office-info-icon">
                    <div className="icon">
                      <i className="fi flaticon-email"></i>
                    </div>
                  </div>
                  <div className="office-info-text">
                    <h2>Address</h2>
                    <p>
                      official@quixidigital.com <br />{" "}
                      quixidigitalmarketing@gmail.com
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="contact-wrap">
            <div className="row">
              <div className="col-lg-6 col-12">
                <div className="contact-left">
                  <h2>Get in touch</h2>
                  <p>Let’s Build Something Bold Together</p>
                  {/* <img className="image" src={Shape} alt="" /> */}
                </div>
              </div>
              <div className="col-lg-6 col-12">
                <div className="contact-right">
                  <div className="title">
                    <h2>Fill Up The Form</h2>
                    <p>
                      Your email address will not be published. Required fields
                      are marked *
                    </p>
                  </div>

                  <form
                    id="form1"
                    className="contact-form"
                    onSubmit={submitHandler}
                  >
                    <div className="input-item">
                      <input
                        className="fild"
                        value={forms.name}
                        type="text"
                        name="name"
                        onBlur={(e) => changeHandler(e)}
                        onChange={(e) => changeHandler(e)}
                        placeholder="Your Name*"
                      />
                      <label>
                        <i className="flaticon-user"></i>
                      </label>
                      {validator.message(
                        "name",
                        forms.name,
                        "required|alpha_space"
                      )}
                    </div>
                    <div className="input-item">
                      <input
                        className="fild"
                        placeholder="Email Address*"
                        value={forms.email}
                        type="email"
                        name="email"
                        onBlur={(e) => changeHandler(e)}
                        onChange={(e) => changeHandler(e)}
                      />
                      <label>
                        <i className="flaticon-email"></i>
                      </label>
                      {validator.message(
                        "email",
                        forms.email,
                        "required|email"
                      )}
                    </div>
                    <div className="input-item">
                      <textarea
                        className="fild textarea"
                        placeholder="Enter Your Message here"
                        value={forms.textarea}
                        name="textarea"
                        onBlur={() => validator.showMessageFor("textarea")}
                        onChange={changeHandler}
                      ></textarea>
                      <label>
                        <i className="ti-new-window"></i>
                      </label>
                      {validator.message(
                        "textarea",
                        forms.textarea,
                        "required|min:10|max:500"
                      )}
                    </div>
                    <div className="input-item submitbtn">
                      <button className="fild" type="submit">
                        Get In Touch
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="map-section">
        <h2 className="hidden">Contact map</h2>
        <div className="wpo-map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3670.5104056078944!2d72.53387477509357!3d23.07840437913474!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e839a0ccfc777%3A0x44bf3d3d97d4ef43!2sQUIXI%20DIGITAL!5e0!3m2!1sen!2sin!4v1752645237773!5m2!1sen!2sin"
            allowfullscreen
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </section>
    </div>
  );
};

export default Contactpage;
