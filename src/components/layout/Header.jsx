import { useInView } from "react-intersection-observer";
import { HashLink as Link } from "react-router-hash-link";
import sarahImg from "../../assets/images/sarah.png";

const Header = () => {
  const { ref: textRef, inView: textInView } = useInView({
    triggerOnce: true,
  });

  return (
    <header style={{ visibility: textInView ? "visible" : "hidden" }}>
      <div className="header-content">
        <div className="header-left" ref={textRef}>
          <div
            className={`hero-text-container ${textInView ? "fade-down" : null}`}
          >
            <h1 className="hero-heading-h1">
              Sarah
              <br />
              Salvatore
            </h1>
            <h2 className="hero-heading-h2">Full Stack Developer</h2>
            <Link to="/#skills" className="black-button">
              Learn More
            </Link>
          </div>
          <img
            className={`hero-img ${textInView ? "fade-up" : null}`}
            src={sarahImg}
            alt="illustration of woman with red hair and glasses"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
