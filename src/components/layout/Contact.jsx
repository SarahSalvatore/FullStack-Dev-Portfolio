import SectionHeading from "./SectionHeading";
import chatBubbles from "../../assets/images/chatbubbles.png";

const Contact = () => {
  return (
    <section className="contact-container-background" id="contact-section">
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
            <h2>Let's Chat</h2>
            <form>
              <label>Name</label>
              <input />
              <label>Email</label>
              <input />
              <label>Message</label>
              <textarea />
              <button className="form-button">Send</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
