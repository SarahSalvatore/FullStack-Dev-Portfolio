import React from "react";
import { HashLink as Link } from "react-router-hash-link";

const LogoLink = (props) => {
  return (
    <Link to="/#">
      <img
        className={props.className}
        src={props.logoSrc}
        alt="blue elipse with a pink outline and a white S."
        title="Sarah Salvatore | Full Stack Developer"
      />
    </Link>
  );
};

export default LogoLink;
