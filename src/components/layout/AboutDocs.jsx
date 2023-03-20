import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFile,
  faAward,
  faCertificate,
} from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faSquareGithub } from "@fortawesome/free-brands-svg-icons";
import { useInView } from "react-intersection-observer";
import certificate from "../../assets/documents/ssalvatoreLetterCompletion2022.pdf";
import resume from "../../assets/documents/SSalvatoreResume2023.pdf";
import grades from "../../assets/documents/ssalvatoreGradesTranscript2022.pdf";

const AboutDocs = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
  });

  return (
    <section className="skills-container">
      <div
        className={`docs-container ${inView ? "fade-fast" : null}`}
        ref={ref}
      >
        <div className="doc-link">
          <a
            href={resume}
            download="SSalvatoreResume2023.pdf"
            target="_blank"
            rel="noreferrer"
            className="skills-badge link"
          >
            <FontAwesomeIcon
              icon={faFile}
              className="icon"
              title="download resume"
            />
            Resume
          </a>
        </div>
        <div className="doc-link">
          <a
            href={grades}
            download="SSalvatoreTranscript.pdf"
            target="_blank"
            rel="noreferrer"
            className="skills-badge link"
          >
            <FontAwesomeIcon
              icon={faAward}
              className="icon"
              title="download transcript"
            />
            Grades
          </a>
        </div>
        <div className="doc-link">
          <a
            href={certificate}
            download="ssalvatoreLetterofCompletion.pdf"
            target="_blank"
            rel="noreferrer"
            className="skills-badge link"
          >
            <FontAwesomeIcon
              icon={faCertificate}
              className="icon"
              title="download certificate"
            />
            Certificate
          </a>
        </div>
        <div className="doc-link">
          <a
            href="https://www.linkedin.com/in/sarah-salvatore-full-stack-developer/"
            target="_blank"
            rel="noreferrer"
            className="skills-badge link"
          >
            <FontAwesomeIcon
              icon={faLinkedin}
              className="icon"
              title="link to LinkedIn"
            />
            Linkedin
          </a>
        </div>
        <div className="doc-link">
          <a
            href="https://github.com/SarahSalvatore"
            target="_blank"
            rel="noreferrer"
            className="skills-badge link"
          >
            <FontAwesomeIcon
              icon={faSquareGithub}
              className="icon"
              title="link to Github"
            />
            GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default AboutDocs;
