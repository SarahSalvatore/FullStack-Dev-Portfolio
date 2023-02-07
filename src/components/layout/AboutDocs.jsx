import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFile,
  faAward,
  faCertificate,
} from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faSquareGithub } from "@fortawesome/free-brands-svg-icons";
import certificate from "../../assets/documents/ssalvatoreLetterCompletion2022.pdf";
import grades from "../../assets/documents/ssalvatoreGradesTranscript2022.pdf";

const AboutDocs = () => {
  return (
    <section className="skills-container">
      <div className="docs-container">
        <div>
          <a
            href="path_to_file"
            download="ssalvatoreTranscript2022.pdf"
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
        <div>
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
        <div>
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
        <div>
          <a
            href="https://www.linkedin.com/in/sarah-salvatore-full-stack-developer/"
            target="_blank"
            rel="noreferrer"
            className="skills-badge link"
          >
            <FontAwesomeIcon
              icon={faLinkedin}
              className="icon"
              title="link to Linkedin"
            />
            Linkedin
          </a>
        </div>
        <div>
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
