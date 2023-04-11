import { useInView } from "react-intersection-observer";
import { HashLink as Link } from "react-router-hash-link";

const Header = () => {
  const { ref: textRef, inView: textInView } = useInView({
    triggerOnce: true,
  });

  return (
    <header>
      <div className="header-content">
        <div
          className={`header-left ${textInView ? "fade-down" : null}`}
          ref={textRef}
        >
          <div className="hero-text-container">
            <h1 className="hero-heading-h1">Sarah Salvatore</h1>
            <h2 className="hero-heading-h2">Full Stack Developer</h2>
            <Link to="/#skills" className="black-button">
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
