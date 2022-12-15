import React from "react";
import { HashLink as Link } from "react-router-hash-link";

const MappedNav = (props) => {
  return props.array.map((item) => {
    return item.externalLink ? (
      <a
        key={item.index}
        className={props.className}
        href={item.linkTo}
        target="_blank"
        rel="noreferrer"
      >
        {item.linkName}
      </a>
    ) : (
      <Link to={item.linkTo} key={item.index} className={props.className}>
        {item.linkName}
      </Link>
    );
  });
};

export default MappedNav;
