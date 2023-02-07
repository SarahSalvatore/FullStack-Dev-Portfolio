import React from "react";
import LogoLink from "./LogoLink";
import logo from "../../assets/logo/logo.png";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer>
      <div className="footer-container">
        <LogoLink logoSrc={logo} className="footer-logo" />
        <p className="paragraph-text">©{year} Sarah Salvatore</p>
        <a
          href="https://www.freepik.com/free-vector/isometric-technology-landing-page-template_6198600.htm?query=computer#from_view=detail_alsolike"
          target="_blank"
          rel="noreferrer"
          className="footer-link"
        >
          Banner image by Freepik
        </a>
        <a
          href="https://www.freepik.com/free-vector/chat-bot-mobile-chatting-isometric-concept_6342161.htm#page=3&query=contact&position=7&from_view=search&track=sph"
          target="_blank"
          rel="noreferrer"
          className="footer-link"
        >
          Contact image by Freepik
        </a>
      </div>
    </footer>
  );
};

export default Footer;
