import { HashLink as Link } from "react-router-hash-link";
import SectionHeading from "./SectionHeading";
import sarahPhoto from "../../assets/images/sarah.png";
import sIcon from "../../assets/images/S.png";

const AboutMe = () => {
  return (
    <section className="section-container-column" id="about-section">
      <SectionHeading title="About Me" />
      <div className="about-section-row">
        <div className="about-left">
          <img
            className="sarah-photo"
            src={sIcon}
            alt="portrait of woman with red hair and a blue, collared shirt"
            title="Hello world!"
          />
        </div>
        <div className="about-right">
          <p className="paragraph-text">
            Hello! Welcome to my little corner of the internet. My name is Sarah
            and I'm a Full Stack Developer based out of Toronto, Canada.
          </p>
          <p className="paragraph-text">
            I'm a problem solver at heart and have always loved to build,
            improve and optimize things. I recently graduated from the Full
            Stack Development program at York University. Before that, I studied
            Graphic Design. Studying design helped me understand the importance
            of information architecture and helped make me a better developer.
          </p>

          <p className="paragraph-text">
            I love to develop intuitive, user-friendly interfaces and
            applications, and I continue to challenge myself to learn new
            technologies, tools and frameworks.
          </p>
          <p className="paragraph-text">
            When I'm not coding, you can usually find me hanging out with my two
            huskies, Buddy and Willow.
          </p>
          <Link to="/resume" className="black-text-link">
            View my resume
          </Link>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
