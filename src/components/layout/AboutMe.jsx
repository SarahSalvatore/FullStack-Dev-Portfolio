import { HashLink as Link } from "react-router-hash-link";
import SectionHeading from "./SectionHeading";
import sarahPhoto from "../../assets/images/sarah.png";

const AboutMe = () => {
  return (
    <section className="section-container-row" id="about-section">
      <div className="about-left">
        <img
          className="sarah-photo"
          src={sarahPhoto}
          alt="woman with red hair and a blue shirt sitting in front of a gray laptop"
        />
      </div>
      <div className="about-right">
        <SectionHeading title="Sarah Salvatore" />
        <p className="paragraph-text">
          Hello and welcome to my little corner of the internet! My name is
          Sarah and I'm a Full Stack Developer based out of Toronto, Canada. I'm
          a problem solver at heart and have always loved to build, improve and
          optimize things.
        </p>
        <p className="paragraph-text">
          I graduated from the Full Stack Development program at York University
          with a focus on the MERN stack. Before that, I graduated from George
          Brown College for Graphic Design. My background in design has enhanced
          my ability to develop intuitive, user-friendly interfaces within
          applications and understand the importance of information
          architecture.
        </p>
        <p className="paragraph-text">
          In my free time, I enjoy learning new technologies, tools and
          frameworks. When I'm not coding, you can usually find me hiking with
          my two huskies or watching obscure horror movies.
        </p>
        <Link to="/resume" className="pink-text-link">
          View my resume
        </Link>
      </div>
    </section>
  );
};

export default AboutMe;
