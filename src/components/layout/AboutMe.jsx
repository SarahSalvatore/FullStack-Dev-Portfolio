import { useInView } from "react-intersection-observer";
import SectionHeading from "./SectionHeading";
import profilePic from "../../assets/images/profile.png";

const AboutMe = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
  });

  return (
    <section className="section-container-column" id="about-section">
      <SectionHeading title="Profile" />
      <div
        ref={ref}
        className={`about-section-row ${inView ? "fade-left" : null}`}
      >
        <div className="about-left">
          <img
            className="sarah-photo"
            src={profilePic}
            alt="silhouette of woman with red hair"
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
            Stack Development program at York University with a focus on the
            MERN stack. Before that, I studied Graphic Design at George Brown
            College. My background in design has made me a better developer by
            providing a deeper understanding of the importance of information
            architecture.
          </p>
          <p className="paragraph-text">
            I love to develop intuitive, user-friendly interfaces on the
            frontend, and clean, efficient applications on the backend. I
            continue to challenge myself to learn new technologies, tools and
            frameworks.
          </p>
          <p className="paragraph-text">
            When I'm not coding, you can usually find me curled up with a book
            or hiking with my two huskies, Buddy and Willow.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
