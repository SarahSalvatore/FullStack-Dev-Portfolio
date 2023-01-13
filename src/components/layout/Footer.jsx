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
      </div>
    </footer>
  );
};

export default Footer;
