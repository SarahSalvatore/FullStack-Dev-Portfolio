import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast, Flip } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { toastProps } from "../../data/toastProps";
import SectionHeading from "./SectionHeading";
import chatBubbles from "../../assets/images/chatbubbles.webp";

const Contact = () => {
  // Handles form input field errors
  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [messageError, setMessageError] = useState("");

  // Ref for emailjs
  const form = useRef();

  // Validates form input fields before allowing submission
  const validateFormInputFields = () => {};

  // Handles contact form submission
  const submitContactForm = (e) => {
    e.preventDefault();

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
        },
        (error) => {
          toast(
            "Something went wrong. Form could not be submitted.",
            toastProps
          );
        }
      );
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
              <input
                className="form-input"
                placeholder="Name"
                aria-label="name"
                name="name"
              />

              <input
                className="form-input"
                placeholder="Email"
                aria-label="email"
                name="email"
              />

              <textarea
                className="form-input"
                placeholder="Message"
                aria-label="message"
                name="message"
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
