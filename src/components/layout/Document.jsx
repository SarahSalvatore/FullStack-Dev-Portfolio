import React from "react";
import resumeIcon from "../../assets/images/resume.png";

const Document = () => {
  return (
    <div className="doc-container">
      <img
        className="doc-icon"
        src={resumeIcon}
        alt="white file with folded corner and text"
      />
      <h1 className="tiny-heading">Resume</h1>
      <p>(HTML)</p>
    </div>
  );
};

export default Document;
