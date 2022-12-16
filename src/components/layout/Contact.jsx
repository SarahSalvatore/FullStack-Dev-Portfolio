import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast, Flip } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { toastProps } from "../../data/toastProps";
import SectionHeading from "./SectionHeading";
import chatBubbles from "../../assets/images/chatbubbles.webp";
import { formValidation } from "../../functions/formValidation";

const Contact = () => {
  // Tracks form input field values
  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    message: "",
  });

  // Handles form input field errors
  const [errors, setErrors] = useState({});

  // Ref for emailjs
  const form = useRef();

  // Handles form input changes
  const handleFormInputChange = (event) => {
    setFormValues({ ...formValues, [event.target.name]: event.target.value });
    console.log(event.target.name);
    console.log(event.target.value);
  };

  // Handles contact form submission
  const submitContactForm = (event) => {
    event.preventDefault();

    // Validates form fields and sets errors
    setErrors(formValidation(formValues));

    // Submit form only if there are no errors found
    if (!errors.name && !errors.email && !errors.message) {
      // Connects the email js account
      emailjs
        .sendForm(
          process.env.REACT_APP_EMAILJS_SERVICE_ID,
          process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
          form.current,
          process.env.REACT_APP_EMAILJS_PUBLIC_KEY
        )
        .then(
          (result) => {
            toast("Your message has been successfully submitted.", toastProps);
            event.target.reset();
          },
          (error) => {
            toast(
              "Something went wrong. Form could not be submitted.",
              toastProps
            );
          }
        );
    }
  };

  return (
    <section className="contact-container-background" id="contact-section">
      <ToastContainer transition={Flip} />
      <div className="section-container-column">
        <SectionHeading title="Contact" />
        <div className="section-container">
          <div className="contact-left">
            <img
              src={chatBubbles}
              alt="two white 3d chat bubbles"
              className="chat-bubbles-img"
            />
            <p className="contact-paragraph-text">
              If you have any questions or want to get in touch, please use my
              contact form or email me at:
            </p>
            <a href="mailto:sarah.h.salvatore@gmail.com" className="email-link">
              sarah.h.salvatore@gmail.com
            </a>

            <p className="contact-paragraph-text">
              I look forward to hearing from you!
            </p>
          </div>
          <div className="contact-right">
            <h2 className="small-heading">Let's Chat</h2>
            <form ref={form} onSubmit={submitContactForm}>
              {errors.name && <p className="error-text">{errors.name}</p>}
              <input
                className="form-input"
                placeholder="Name"
                aria-label="name"
                name="name"
                value={formValues.name}
                onChange={handleFormInputChange}
              />

              {errors.email && <p className="error-text">{errors.email}</p>}
              <input
                className="form-input"
                placeholder="Email"
                aria-label="email"
                name="email"
                value={formValues.email}
                onChange={handleFormInputChange}
              />

              {errors.message && <p className="error-text">{errors.message}</p>}
              <textarea
                className="form-input"
                placeholder="Message"
                aria-label="message"
                name="message"
                value={formValues.message}
                onChange={handleFormInputChange}
              />
              <button className="form-button">Send</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
