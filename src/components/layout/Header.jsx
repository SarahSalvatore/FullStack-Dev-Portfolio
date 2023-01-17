import { HashLink as Link } from "react-router-hash-link";
import heroImage from "../../assets/images/hero-image.png";

const Header = () => {
  return (
    <header>
      <div className="header-content">
        <div className="header-left">
          <div className="hero-text-container">
            <hr className="hero-hr" />
            <h1 className="hero-heading-h1">Hi, I'm Sarah.</h1>
            <h2 className="hero-heading-h2">Full Stack Developer</h2>
            <Link to="/#about-section" className="black-button hero">
              Learn More
            </Link>
          </div>
        </div>
        <div className="header-right">
          <img
            src={heroImage}
            className="hero-image"
            alt="A white, 3d coding tag symbol"
            title="Hello World!"
          ></img>
        </div>
      </div>
    </header>
  );
};

export default Header;
