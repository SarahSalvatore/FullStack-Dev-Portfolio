import React from "react";
import MappedNav from "../operations/MappedNav";
import LogoLink from "./LogoLink";
import { navList } from "../../data/navList";
import { linkList } from "../../data/linkList";
import logo from "../../assets/logo/footer-logo.webp";

const Footer = () => {
  return (
    <footer>
      <div className="section-container-row">
        <div>
          <LogoLink logoSrc={logo} className="footer-logo" />
          <h1 className="footer-heading-font">Sarah Salvatore</h1>
          <p className="paragraph-text">
            Built with React, JavaScript, Email.js
          </p>
          <p className="paragraph-text">© 2022</p>
        </div>
        <div className="footer-links-container">
          <div className="footer-links-list">
            <hr />
            <h2>EXPLORE</h2>
            <MappedNav array={navList} className="footer-link" />
          </div>
          <div className="footer-links-list">
            <hr />
            <h2>LINKS</h2>
            <MappedNav array={linkList} className="footer-link" />
            <a
              href="../../data/SSalvatoreResume2023.pdf"
              download="SSalvatoreResume2023"
              className="footer-link"
            >
              Resume (pdf)
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
