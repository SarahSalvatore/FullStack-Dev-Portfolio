import React from "react";

const SectionHeading = (props) => {
  return (
    <div>
      <hr />
      <h1 className="section-heading-font">{props.title}</h1>
    </div>
  );
};

export default SectionHeading;
