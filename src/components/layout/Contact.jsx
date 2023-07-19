import React, { useState, useRef, useEffect } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast, Flip } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { toastProps } from "../../data/toastProps";
import { useInView } from "react-intersection-observer";
import SectionHeading from "./SectionHeading";
import contactPic from "../../assets/images/contact.png";
import { formValidation } from "../../functions/formValidation";

const Contact = () => {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

  // Tracks form input field values
  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [submit, setSubmit] = useState(false);

  // Handles form input field errors
  const [errors, setErrors] = useState({});

  // Ref for emailjs
  const form = useRef();

  // Handles form input changes
  const handleFormInputChange = (event) => {
    setFormValues({ ...formValues, [event.target.name]: event.target.value });
  };

  // Handles contact form submission
  const submitContactForm = (event) => {
    event.preventDefault();

    // Validates form fields and sets errors
    setErrors(formValidation(formValues));
    setSubmit(true);
  };

  useEffect(() => {
    if (
      submit &&
      Object.keys(errors).length === 0 &&
      formValues.name &&
      formValues.email &&
      formValues.message
    ) {
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
            setFormValues({ name: "", email: "", message: "" });
            setSubmit(false);
          },
          (error) => {
            toast(
              "Something went wrong. Form could not be submitted.",
              toastProps
            );
            setSubmit(false);
          }
        );
    }
  }, [errors, formValues.name, formValues.email, formValues.message, submit]);

  return (
    <section
      id="contact-section"
      style={{ visibility: inView ? "visible" : "hidden" }}
    >
      <ToastContainer transition={Flip} />
      <div className="section-container-column">
        <SectionHeading title="Contact" />
        <div
          ref={ref}
          className={`section-container ${inView ? "fade-up" : null}`}
        >
          <div className="contact-left">
            <img
              src={contactPic}
              alt="phone with text messages coming out of the screen"
              className="contact-img"
            />
            <p className="contact-paragraph-text">
              If you would like to get in touch, please use the contact form or
              email me at:
            </p>
            <a href="mailto:sarah.h.salvatore@gmail.com" className="email-link">
              sarah.h.salvatore@gmail.com
            </a>
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
